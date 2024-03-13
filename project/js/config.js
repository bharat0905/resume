var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiYmJoYXJhdCIsImEiOiJjbHRlcXBncjAwbDR1MmpwbXFwdWh5bzA0In0.5-1xARwUUHmZK_fabegyfg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Mountains',
    subtitle: 'Here are the top 5 mountains in India with their heights and brief descriptions',
    byline: 'bbharat0905.github.io',
    footer: 'Images and information are sourced under <a>https://commons.wikimedia.org/w/index.php?curid=110322497</a>',
    chapters: [
        {
            id: 'volcan1',
            alignment: 'left',
            hidden: false,
            title: 'Mount Kanchenjunga (8,586m)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Kangchenjunga%2C_India.jpg/408px-Kangchenjunga%2C_India.jpg',
            description: 'Standing tall at the India-Nepal border, Kanchenjunga is the worlds third highest peak, offering stunning views and challenging treks',
            location: {
                center: [88.1475, 27.7025],
                zoom: 14.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }, {
            id: 'volcan2',
            alignment: 'right',
            hidden: false,
            title: 'Nanda Devi (7,816m)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mt._Nanda_Devi.jpg/408px-Mt._Nanda_Devi.jpg',
            description: 'Nanda Devi, part of the Garhwal Himalayas, is the second highest mountain in India, surrounded by the Nanda Devi National Park, a UNESCO World Heritage Site.',
            location: {
                center: [79.9708, 30.3754],
                zoom: 14.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, {
            id: 'volcan3',
            alignment: 'left',
            hidden: false,
            title: 'Kamet (7,756m)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kamet_Closeup.jpg/408px-Kamet_Closeup.jpg',
            description: 'Situated in the Garhwal region, Kamet is the third highest mountain in India, offering challenging climbs and significant prominence within the region.',
            location: {
                center: [79.5645, 30.9254],
                zoom: 14.45,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, {
            id: 'volcan4',
            alignment: 'right',
            hidden: false,
            title: 'Saltoro Kangri (7,742m)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Saltoro_Kangri.jpg/408px-Saltoro_Kangri.jpg',
            description: 'The highest peak of the Saltoro Mountains, Saltoro Kangri is located in the Karakoram Range, in the disputed Siachen region.',
            location: {
                center: [76.8667, 35.4000],
                zoom: 14.45,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'volcan5',
            alignment: 'left',
            hidden: false,
            title: 'Saser Kangri (7,672m)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Saser_Kangri_III_and_II.jpg/408px-Saser_Kangri_III_and_II.jpg',
            description: 'Part of the Saser Muztagh in the eastern Karakoram range, Saser Kangri is among the highest mountains in India, known for its remote location and challenging terrain.',
            location: {
                center: [77.5462, 34.8347],
                zoom: 15.45,
                pitch: 54,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
