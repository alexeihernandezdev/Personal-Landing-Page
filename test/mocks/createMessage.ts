import { vi } from "vitest";

export const createMessageMock = vi.fn(async () => ({
  data: { id: "test-id" },
  status: 201,
}));

export default createMessageMock;
