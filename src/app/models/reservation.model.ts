export class ReservationModel {
    id: number;
    device: number;
    user: number;
    deviceName: string;
    username: string;
    startTime: Date;
    endTime: Date;
    previousUser: number | null;
    previousUsername: string;
    active: boolean;
    timestamp: Date;
}
