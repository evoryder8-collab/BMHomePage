// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Reveal from "./Reveal";

describe("Reveal", () => {
  it("renders its children", () => {
    render(
      <Reveal>
        <p>hello world</p>
      </Reveal>,
    );
    expect(screen.getByText("hello world")).toBeTruthy();
  });
});
