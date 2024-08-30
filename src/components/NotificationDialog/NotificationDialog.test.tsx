import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationDialog from './NotificationDialog';
import { NotificationDialogProps } from './NotificationDialog.types';
import { Icon24Hours } from '@tabler/icons-react';
import Text from '../Text/Text';

describe('NotificationDialog component', () => {
  let defaultProps: NotificationDialogProps;

  beforeEach(() => {
    defaultProps = {
      'data-testid': 'notification-dialog',
      title:"Notification",
      open: true
    };
  });

  const renderNotificationDialog = (props: Partial<NotificationDialogProps>) => {
    render(<NotificationDialog {...defaultProps} {...props} />);
  };

  it('should render without crashing', () => {
    renderNotificationDialog({});
    const notificationDialog = screen.getByTestId('notification-dialog');
    expect(notificationDialog).toBeInTheDocument();
  });

  it('should render with props', () => {
    renderNotificationDialog({
      color: 'red',
      style: { color: 'red' },
      className: 'notification-dialog',
    });
    const notificationDialog = screen.getByTestId('notification-dialog');
    expect(notificationDialog).toBeInTheDocument();
  });

  it('should render with children', () => {
    renderNotificationDialog({
      color: 'red',
      style: { color: 'red' },
      className: 'notification-dialog',
      children: "Notification",
    });
    const notificationDialog = screen.getByTestId('notification-dialog');
    expect(notificationDialog).toBeInTheDocument();
  });

  it("should render with leading icon", () => {
    renderNotificationDialog({ leadingIcon: <Icon24Hours/> });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  })

  it("should render with trailing icon", () => {
    renderNotificationDialog({ trailingIcon: <Icon24Hours/> });
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  })

  it("Should render with custom title", () => {
    renderNotificationDialog({title: <Text>Custom Title</Text>});
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render contained variant", () => {
    renderNotificationDialog({variant: "contained"});
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render outlined variant", () => {
    renderNotificationDialog({variant: "outlined"});
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });

  it("Should render soft variant", () => {
    renderNotificationDialog({variant: "soft"});
    const notificationDialog = screen.getByTestId("notification-dialog");
    expect(notificationDialog).toBeInTheDocument();
  });
});