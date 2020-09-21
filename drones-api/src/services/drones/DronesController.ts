let dronesInfo = [
    {
        id: "FA3EET3C7E",
        lat: 47.614879,
        lng: -122.317133,
        spd: 60,
        d: 0
    },
    {
        id: "FA3EET3C8A",
        lat: 47.615218,
        lng: -122.323005,
        spd: 30,
        d: 10
    },
    {
        id: "FA3EET3C9C",
        lat: 47.611049,
        lng: -122.316300,
        spd: 90,
        d: 10
    },
    {
        id: "FA3EET3C9D",
        lat: 47.612001,
        lng: -122.319740,
        spd: 65,
        d: 10
    },
    {
        id: "FA3EET3C9E",
        lat: 47.613240,
        lng: -122.313826,
        spd: 35,
        d: 10
    },
    {
        id: "FA3EET3C9F",
        lat: 47.611055,
        lng: -122.316315,
        spd: 85,
        d: 10
    },
    {
        id: "FA3EET3D1A",
        lat: 47.609544,
        lng: -122.325488,
        spd: 10,
        d: 10
    },
    {
        id: "FA3EET3D1B",
        lat: 47.609486,
        lng: -122.316648,
        spd: 20,
        d: 10
    },
    {
        id: "FA3EET3D2A",
        lat: 47.612191,
        lng: -122.316959,
        spd: 15,
        d: 10
    },
    {
        id: "FA3EET3D3B",
        lat: 47.615482,
        lng: -122.324329,
        spd: 30,
        d: 10
    },
];

function updateLocation() {

    dronesInfo.forEach((drone) => {
        drone.lng = Number((drone.lng + 0.000050).toFixed(6));
        drone.lat = Number((drone.lat + 0.000050).toFixed(6));
    })
}

setInterval(updateLocation, 1000)

export const getDronesInfo = () => {
    return dronesInfo;
}