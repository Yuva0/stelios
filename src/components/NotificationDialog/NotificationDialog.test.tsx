import * as React from "react";
import { render, screen } from "@testing-library/react";
import NotificationDialog from "./NotificationDialog";
import { NotificationDialogProps } from "./NotificationDialog.types";
import { Icon24Hours } from "@tabler/icons-react";
import Text from "../Text/Text";

describe("NotificationDialog component", () => {
  let defaultProps: NotificationDialogProps;

  beforeEach(() => {
    defaultProps = {
      "data-testid": "notification-dialog",
      title: "Notification",
    };
  });

  const renderNotificationDialog = (
    props: Partial<NotificationDialogProps>
  ) => {
    render(<NotificationDialog {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderNotificationDialog({ open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("should render with props", () => {
    renderNotificationDialog({
      open: true,
      color: "red",
      style: { color: "red" },
      className: "notification-dialog",
    });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("should render with children", () => {
    renderNotificationDialog({
      open: true,
      color: "red",
      style: { color: "red" },
      className: "notification-dialog",
      children: "Notification",
    });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("should render with leading icon", () => {
    renderNotificationDialog({ leadingIcon: <Icon24Hours />, open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("should render with trailing icon", () => {
    renderNotificationDialog({ trailingIcon: <Icon24Hours />, open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render with custom title", () => {
    renderNotificationDialog({ title: <Text>Custom Title</Text>, open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render contained variant", () => {
    renderNotificationDialog({ variant: "contained", open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render outlined variant", () => {
    renderNotificationDialog({ variant: "outlined", open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render soft variant", () => {
    renderNotificationDialog({ variant: "soft", open: true });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("should have closed notification dialog", () => {
    renderNotificationDialog({ width: "100%" });
  });

  it("should close the notification dialog", () => {
    renderNotificationDialog({ variant: "soft", open: false });
  });

  it("should have 'bottom' equal to negative height when open is false", () => {
    const { rerender } = render(
      <NotificationDialog open={true} width="auto" title="Test" data-testid="notification-dialog" />
    );

    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();

    rerender(
      <NotificationDialog open={false} width="auto" title="Test" data-testid="notification-dialog" />
    );
  });
});
