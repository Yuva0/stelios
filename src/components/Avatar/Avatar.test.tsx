import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

describe("Avatar Testcases", () => {
  let defaultProps: Partial<AvatarProps>;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "avatar",
    }
  });

  const renderAvatar = (props: any) => {
    return render(<Avatar {...defaultProps} {...props}/>)
  }

  it("render a simple Avatar with initials", () => {
    renderAvatar({initials:"TS", type: "initials"})
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("render a simple Avatar with image", () => {
    const src = "https://example.com/avatar.png";
    const alt = "User Avatar";
    renderAvatar({src, alt, type: "image"});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("renders with rounded shape", () => {
    const shape = "rounded";
    renderAvatar({shape});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveStyle(`border-radius: 50%`);
  });

  it("renders with square shape", () => {
    const shape = "square";
    renderAvatar({shape});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("renders with contained variant", () => {
    const variant = "contained";
    renderAvatar({variant});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("renders with outlined variant", () => {
    const variant = "outlined";
    renderAvatar({variant});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("render with small size", () => {
    const size = "small";
    renderAvatar({size, type:"initials"});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("render with medium size", () => {
    const size = "medium";
    renderAvatar({size});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("render with large size", () => {
    const size = "large";
    renderAvatar({size});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("render with xlarge size", () => {
    const size = "xlarge";
    renderAvatar({size});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("render with custom color", () => {
    const color = "red";
    renderAvatar({color});
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });
});