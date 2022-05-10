

module.exports = class UserEffectListEvent {

    static header = 340;

    static Parse(client, packet) {
        let totalEffects = packet.readInt();
        let effects = [];

        while(totalEffects-- > 0) {
            const effect = {}

            effect.type = packet.readInt();
            effect.subType = packet.readInt();
            effect.duration = packet.readInt();
            effect.inactiveEffectsInInventory = packet.readInt();
            effect.secondsLeftIfActive = packet.readInt();
            effect.isPermanent = packet.readBoolean();

            effects.push(effect);
        }
        client.debug && console.log(effects);
    }

}