

module.exports = class CampaignCalendarDataEvent {

    static header = 2531;

    static Parse(client, packet) {
        let calendarData = {}
        calendarData.campaignName = packet.readString();
        calendarData.campaignImage = packet.readString();
        calendarData.currentDay = packet.readInt();
        calendarData.campaignDays = packet.readInt();
        calendarData.openedDays = [];

        let count = packet.readInt();

        while (count-- > 0) {
            calendarData.openedDays.push(packet.readInt());
        }

        calendarData.missedDays = [];

        count = packet.readInt();

        while (count-- > 0) {
            calendarData.missedDays.push(packet.readInt());
        }
        client.debug && console.log(calendarData);
    }

}