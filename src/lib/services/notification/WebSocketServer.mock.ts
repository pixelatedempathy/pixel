import { NotificationService } from './NotificationService.mock';

/**
 * Mock WebSocket server for notifications
 */
export class WebSocketServer {
  private port: number;
  private notificationService: NotificationService;

  constructor(port: number, notificationService: NotificationService) {
    this.port = port;
    this.notificationService = notificationService;
  }

  /**
   * Close the WebSocket server
   */
  close(): void {
    // Mock implementation
  }
}
