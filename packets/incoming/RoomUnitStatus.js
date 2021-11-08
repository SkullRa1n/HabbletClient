let Room = require("../../habbo/Room");

class RoomUnitStatus {

	Parse(packet, client){

		let data = {
			unitStatuses: new Array(packet.readInt())
		}

		for(let i = 0; i < data.unitStatuses.length; i++){
			let statuses = this.parseStatus(packet);

            if(statuses.length === 1){
                statuses = statuses[0];
            }

			if(!statuses){
				console.log(statuses);
				console.log(packet);
				console.log(data.unitStatuses);
				throw new Error("Ué?")
			}

            Room.UpdateUnit(statuses);

			data.unitStatuses[i] = statuses;
		}


		// console.log(data.unitStatuses.length);
	}

	parseStatus(wrapper){
        if(!wrapper) return null;

        let _statuses = [];

        const unitId        = wrapper.readInt();
        const x               = wrapper.readInt();
        const y               = wrapper.readInt();
        const z               = parseFloat(wrapper.readString());
        const headDirection = ((wrapper.readInt() % 8) * 45);
        const direction     = ((wrapper.readInt() % 8) * 45);
        const actions       = wrapper.readString();

        let targetX     = 0;
        let targetY     = 0;
        let targetZ     = 0;
        let height      = 0;
        let canStandUp  = false;
        let didMove     = false;
        const isSlide     = false;

        if(actions)
        {
            const actionParts = actions.split('/');

            const totalActions = actionParts.length;

            const statusActions = [];

            if(totalActions)
            {
                for(let i = 0; i < totalActions; i++)
                {
                    const action = actionParts[i];

                    if(!action) continue;

                    const [ key, value, extra ] = action.split(' ');

                    if(!key || !value) continue;

                    switch(key)
                    {
                        case 'mv':
                            [ targetX, targetY, targetZ ] = value.split(',').map(a => parseFloat(a));

                            didMove = true;

                            break;
                        case 'sit': {
                            const sitHeight = parseFloat(value);

                            if(extra !== undefined) canStandUp = value === '1';

                            height = sitHeight;

                            break;
                        }
                        case 'lay': {
                            const layHeight = parseFloat(value);

                            height = layHeight;

                            break;
                        }
                    }

                    statusActions.push({
                    	action: key,
                    	value: value
                    });
                }
            }
            _statuses.push({
            	id: unitId,
            	x: x,
            	y: y,
            	z: z,
            	height: height,
            	headDirection: headDirection,
            	direction: direction,
            	targetX: targetX,
            	targetY: targetY,
            	targetZ: targetZ,
            	didMove: didMove,
            	canStandUp: canStandUp,
            	actions: statusActions || []
            });
        }

        return _statuses;
    }

}

module.exports = RoomUnitStatus;