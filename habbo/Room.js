let RoomUnit = require("./RoomUnit");

class Room {

	static Units = [];
	static Id;
	static Name;

	static GetUnitByIndex(roomIndex){
		for(let unit of Room.Units)
			if(unit.roomIndex === roomIndex)
				return unit;
	}

	static GetUnitByName(username){
		for(let unit of Room.Units)
			if(unit.username === username)
				return unit;
	}

	static UpdateUnit(unitStatus){
		let unit = Room.GetUnitByIndex(unitStatus.id);
		if(unit){
			unit.Update(unitStatus);
		}
	}

}

module.exports = Room;