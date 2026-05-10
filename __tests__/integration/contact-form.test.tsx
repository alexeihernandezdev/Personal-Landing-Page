import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../test/renderWithProviders";
import { createMessageMock } from "../../test/mocks/createMessage";

import { Contact } from "@/components/pages/home/contact/Contact";

const FORMSPREE_URL = "https://formspree.io/f/xrerlela";

beforeEach(() => {
  createMessageMock.mockClear();
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function stubFetch(response: Partial<Response>) {
  const fetchMock = vi.fn(async () => response as Response);
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

async function fillAndSubmit(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/nombre/i), "Alexei");
  await user.type(screen.getByLabelText(/email|correo/i), "ah@example.com");
  await user.type(screen.getByLabelText(/mensaje/i), "Hello there!");
  await user.click(screen.getByRole("button", { name: /enviar mensaje|enviando|enviar/i }));
}

describe("Contact form", () => {
  it("submits and shows the success state on a successful response", async () => {
    const fetchMock = stubFetch({ ok: true, status: 200 });
    renderWithProviders(<Contact />, { locale: "es" });

    const user = userEvent.setup();
    await fillAndSubmit(user);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
    expect(fetchMock).toHaveBeenCalledWith(
      FORMSPREE_URL,
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      }),
    );
    const firstCall = fetchMock.mock.calls[0] as unknown as [
      string,
      RequestInit,
    ];
    const body = JSON.parse(firstCall[1].body as string);
    expect(body).toEqual({
      name: "Alexei",
      email: "ah@example.com",
      message: "Hello there!",
    });
    expect(createMessageMock).toHaveBeenCalledTimes(1);

    const status = await screen.findByRole("status", undefined, {
      timeout: 2000,
    });
    expect(status).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /mensaje enviado/i }),
    ).toBeInTheDocument();
  });

  it("shows the error toast when the response is not ok", async () => {
    stubFetch({ ok: false, status: 500 });
    renderWithProviders(<Contact />, { locale: "es" });

    const user = userEvent.setup();
    await fillAndSubmit(user);

    expect(
      await screen.findByRole("alert", undefined, { timeout: 2000 }),
    ).toBeInTheDocument();
  });

  it("dismisses the error toast when clicking the close button", async () => {
    stubFetch({ ok: false, status: 500 });
    renderWithProviders(<Contact />, { locale: "es" });

    const user = userEvent.setup();
    await fillAndSubmit(user);

    const toast = await screen.findByRole("alert", undefined, { timeout: 2000 });
    const dismiss = toast.querySelector("button");
    expect(dismiss).not.toBeNull();
    await user.click(dismiss!);
    await waitFor(() => {
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  it("renders contact methods (email, phone, location)", () => {
    stubFetch({ ok: true, status: 200 });
    renderWithProviders(<Contact />, { locale: "es" });
    expect(screen.getAllByText(/email/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/tel[eé]fono/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/ubicaci[oó]n/i).length).toBeGreaterThan(0);
  });
});
