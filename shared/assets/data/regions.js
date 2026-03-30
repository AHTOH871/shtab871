import { Images } from "lucide-react";

const regions = [
    'Алтайский край', 
    'Амурская область', 
    'Архангельская область', 
    'Астраханская область', 
    'Белгородская область', 
    'Брянская область',
    'Владимирская область',
    'Волгоградская область',
    'Вологодская область',
    'Воронежская область',
    'г. Москва',
    'г. Санкт-Петербург',
    'г. Севастополь',
    'Донецкая народная республика',
    'Еврейская автономная область',
    'Забайкальский край',
    'Запорожская область',
    'Ивановская область',
    'Иркутская область',
    'Кабардино-Балкарская республика',
    'Калининградская область',
    'Калужская область',
    'Камчатский край',
    'Карачаево-Черкесская Республика',
    'Кемеровская область - Кузбасс',
    'Кировская область',
    'Костромская область',
    'Краснодарский край',
    'Красноярский край',
    'Курганская область',
    'Курская область',
    'Ленинградская область',
    'Липецкая область',
    'Луганская народная республика',
    'Магаданская область',
    'Московская область',
    'Мурманская область',
    'Ненецкий автономный округ',
    'Нижегородская область',
    'Новгородская область',
    'Новосибирская область',
    'Омская область',
    'Оренбургская область',
    'Орловская область',
    'Пензенская область',
    'Пермский край',
    'Приморский край',
    'Псковская область',
    'Республика Адыгея',
    'Республика Алтай',
    'Республика Башкортостан',
    'Республика Бурятия',
    'Республика Дагестан',
    'Республика Ингушетия',
    'Республика Калмыкия',
    'Республика Карелия',
    'Республика Коми',
    'Республика Крым',
    'Республика Марий Эл',
    'Республика Мордовия',
    'Республика Саха (Якутия)',
    'Республика Северная Осетия - Алания',
    'Республика Татарстан',
    'Республика Тыва',
    'Республика Хакасия',
    'Ростовская область',
    'Рязанская область',
    'Самарская область',
    'Саратовская область',
    'Сахалинская область',
    'Свердловская область',
    'Смоленская область',
    'Ставропольский край',
    'Тамбовская область',
    'Тверская область',
    'Томская область',
    'Тульская область',
    'Тюменская область',
    'Удмуртская Республика',
    'Ульяновская область',
    'Хабаровский Край',
    'Ханты-Мансийский автономный округ - Югра',
    'Херсонская область',
    'Челябинская область',
    'Чеченская Республика',
    'Чувашская Республика - Чувашия',
    'Чукотский автономный округ',
    'Ямало-Ненецкий автономный округ',
    'Ярославская область'
    ]

export const zones = {
    yellow: {
        title: "Жёлтая зона",
        regions: [],
    },
    green: {
        title: "Зелёная зона",
        regions: [],
    },
    grey: {
        title: "Серая зона",
        regions: [],
    },
}


export const regionsData = {
    
    "high_stability": [
        {
            "id": 61,
            "region": "Республика Мордовия",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/61/"
        },
        {
            "id": 75,
            "region": "Тамбовская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/75/"
        },
        {
            "id": 22,
            "region": "Калининградская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/22/"
        },
        {
            "id": 23,
            "region": "Калужская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/23/"
        },
        {
            "id": 24,
            "region": "Камчатский Край",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/24/"
        },
        {
            "id": 27,
            "region": "Кировская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/27/"
        },
        {
            "id": 71,
            "region": "Сахалинская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/71/"
        },
        {
            "id": 31,
            "region": "Курганская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/31/"
        },
        {
            "id": 33,
            "region": "Ленинградская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/33/"
        },
        {
            "id": 68,
            "region": "Рязанская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/68/"
        },
        {
            "id": 73,
            "region": "Смоленская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/73/"
        },
        {
            "id": 38,
            "region": "Мурманская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/38/"
        },
        {
            "id": 58,
            "region": "Республика Коми",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/58/"
        },
        {
            "id": 56,
            "region": "Республика Калмыкия",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/56/"
        },
        {
            "id": 42,
            "region": "Новосибирская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/42/"
        },
        {
            "id": 50,
            "region": "Республика Адыгея",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/50/"
        },
        {
            "id": 44,
            "region": "Оренбургская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/44/"
        },
        {
            "id": 45,
            "region": "Орловская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/45/"
        },
        {
            "id": 47,
            "region": "Пермский Край",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/47/"
        },
        {
            "id": 48,
            "region": "Приморский Край",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/48/"
        },
        {
            "id": 19,
            "region": "Ивановская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/19/"
        },
        {
            "id": 90,
            "region": "Ярославская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/90/"
        },
        {
            "id": 89,
            "region": "Ямало-Ненецкий Автономный Округ",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/89/"
        },
        {
            "id": 87,
            "region": "Чувашская Республика - Чувашия",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/87/"
        },
        {
            "id": 6,
            "region": "Белгородская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/6/"
        },
        {
            "id": 9,
            "region": "Волгоградская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/9/"
        },
        {
            "id": 86,
            "region": "Чеченская Республика",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/86/"
        },
        {
            "id": 12,
            "region": "Г. Москва",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/12/"
        },
        {
            "id": 13,
            "region": "Г. Санкт-Петербург",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/13/"
        },
        {
            "id": 14,
            "region": "Г. Севастополь",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/14/"
        },
        {
            "id": 80,
            "region": "Удмуртская Республика",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/80/"
        },
        {
            "id": 79,
            "region": "Тюменская Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/79/"
        },
        {
            "id": 16,
            "region": "Еврейская Автономная Область",
            "risks_zones": "0 / 0 / 1 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/16/"
        },
        {
            "id": 32,
            "region": "Курская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/32/"
        },
        {
            "id": 20,
            "region": "Иркутская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/20/"
        },
        {
            "id": 78,
            "region": "Тульская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/78/"
        },
        {
            "id": 49,
            "region": "Псковская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/49/"
        },
        {
            "id": 5,
            "region": "Астраханская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/5/"
        },
        {
            "id": 7,
            "region": "Брянская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/7/"
        },
        {
            "id": 60,
            "region": "Республика Марий Эл",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/60/"
        },
        {
            "id": 83,
            "region": "Ханты-Мансийский Автономный Округ - Югра",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/83/"
        },
        {
            "id": 64,
            "region": "Республика Татарстан",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/64/"
        },
        {
            "id": 70,
            "region": "Саратовская Область",
            "risks_zones": "0 / 0 / 2 из 2",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/70/"
        },
        {
            "id": 8,
            "region": "Владимирская Область",
            "risks_zones": "0 / 0 / 3 из 3",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/8/"
        },
        {
            "id": 53,
            "region": "Республика Бурятия",
            "risks_zones": "0 / 0 / 3 из 3",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/53/"
        },
        {
            "id": 72,
            "region": "Свердловская Область",
            "risks_zones": "0 / 0 / 3 из 3",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/72/"
        },
        {
            "id": 28,
            "region": "Костромская Область",
            "risks_zones": "0 / 0 / 3 из 3",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/28/"
        },
        {
            "id": 46,
            "region": "Пензенская Область",
            "risks_zones": "0 / 0 / 4 из 4",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/46/"
        },
        {
            "id": 34,
            "region": "Липецкая Область",
            "risks_zones": "0 / 0 / 4 из 4",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/34/"
        },
        {
            "id": 85,
            "region": "Челябинская Область",
            "risks_zones": "0 / 0 / 5 из 5",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/85/"
        },
        {
            "id": 52,
            "region": "Республика Башкортостан",
            "risks_zones": "0 / 0 / 5 из 5",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/52/"
        },
        {
            "id": 59,
            "region": "Республика Крым",
            "risks_zones": "0 / 0 / 6 из 6",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/59/"
        },
        {
            "id": 37,
            "region": "Московская Область",
            "risks_zones": "0 / 0 / 7 из 7",
            "road_map_ro": "0",
            "url": "http://127.0.0.1:8000/api/risk_zones/37/"
        },
        {
            "id": 11,
            "region": "Воронежская Область",
            "risks_zones": "0 / 0 / 8 из 8",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/11/"
        },
        {
            "id": 40,
            "region": "Нижегородская Область",
            "risks_zones": "0 / 0 / 9 из 9",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/40/"
        }
    ],
    "medium_stability": [
        {
            "id": 17,
            "region": "Забайкальский Край",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/17/"
        },
        {
            "id": 18,
            "region": "Запорожская Область",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/18/"
        },
        {
            "id": 76,
            "region": "Тверская Область",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/76/"
        },
        {
            "id": 15,
            "region": "Донецкая Народная Республика",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/15/"
        },
        {
            "id": 69,
            "region": "Самарская Область",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/69/"
        },
        {
            "id": 4,
            "region": "Архангельская Область",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/4/"
        },
        {
            "id": 84,
            "region": "Херсонская Область",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/84/"
        },
        {
            "id": 57,
            "region": "Республика Карелия",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/57/"
        },
        {
            "id": 55,
            "region": "Республика Ингушетия",
            "risks_zones": "0 / 1 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/55/"
        },
        {
            "id": 63,
            "region": "Республика Северная Осетия - Алания",
            "risks_zones": "0 / 1 / 1 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/63/"
        },
        {
            "id": 39,
            "region": "Ненецкий Автономный Округ",
            "risks_zones": "0 / 1 / 1 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/39/"
        },
        {
            "id": 26,
            "region": "Кемеровская Область - Кузбасс",
            "risks_zones": "0 / 1 / 1 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/26/"
        },
        {
            "id": 25,
            "region": "Карачаево-Черкесская Республика",
            "risks_zones": "0 / 1 / 1 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/25/"
        },
        {
            "id": 81,
            "region": "Ульяновская Область",
            "risks_zones": "0 / 1 / 4 из 5",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/81/"
        },
        {
            "id": 77,
            "region": "Томская Область",
            "risks_zones": "0 / 1 / 6 из 7",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/77/"
        },
        {
            "id": 88,
            "region": "Чукотский Автономный Округ",
            "risks_zones": "0 / 18 / 3 из 21",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/88/"
        },
        {
            "id": 10,
            "region": "Вологодская Область",
            "risks_zones": "0 / 2 / 0 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/10/"
        },
        {
            "id": 65,
            "region": "Республика Тыва",
            "risks_zones": "0 / 2 / 0 из 2",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/65/"
        },
        {
            "id": 29,
            "region": "Краснодарский Край",
            "risks_zones": "0 / 2 / 10 из 12",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/29/"
        },
        {
            "id": 30,
            "region": "Красноярский Край",
            "risks_zones": "0 / 2 / 12 из 14",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/30/"
        },
        {
            "id": 74,
            "region": "Ставропольский Край",
            "risks_zones": "0 / 2 / 2 из 4",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/74/"
        },
        {
            "id": 41,
            "region": "Новгородская Область",
            "risks_zones": "0 / 2 / 2 из 4",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/41/"
        },
        {
            "id": 82,
            "region": "Хабаровский Край",
            "risks_zones": "0 / 2 / 2 из 4",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/82/"
        },
        {
            "id": 3,
            "region": "Амурская Область",
            "risks_zones": "0 / 2 / 3 из 5",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/3/"
        },
        {
            "id": 67,
            "region": "Ростовская Область",
            "risks_zones": "0 / 2 / 6 из 8",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/67/"
        },
        {
            "id": 21,
            "region": "Кабардино-Балкарская Республика",
            "risks_zones": "0 / 3 / 0 из 3",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/21/"
        },
        {
            "id": 54,
            "region": "Республика Дагестан",
            "risks_zones": "0 / 3 / 0 из 3",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/54/"
        },
        {
            "id": 51,
            "region": "Республика Алтай",
            "risks_zones": "0 / 3 / 0 из 3",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/51/"
        },
        {
            "id": 66,
            "region": "Республика Хакасия",
            "risks_zones": "0 / 4 / 1 из 5",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/66/"
        },
        {
            "id": 2,
            "region": "Алтайский Край",
            "risks_zones": "0 / 4 / 3 из 7",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/2/"
        },
        {
            "id": 62,
            "region": "Республика Саха (Якутия)",
            "risks_zones": "0 / 4 / 8 из 12",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/62/"
        },
        {
            "id": 36,
            "region": "Магаданская Область",
            "risks_zones": "0 / 8 / 1 из 9",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/36/"
        }
    ],
    "low_stability": [
        {
            "id": 43,
            "region": "Омская Область",
            "risks_zones": "1 / 0 / 0 из 1",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/43/"
        }
    ],
    "gray_zone": [
        {
            "id": 35,
            "region": "Луганская Народная Республика",
            "risks_zones": "не подлежит оценке",
            "road_map_ro": "+",
            "url": "http://127.0.0.1:8000/api/risk_zones/35/"
        }
    ]
}


export const dataOperation = [
    {
      id: 1,
      subject: "Магаданская область",
      operators: [
        {
          id: 1,
          name: "СМУП «КОММУНАЛЬНИК»",
          zone: "Среднеканский ГО",
          deadline: "27.06.2023 / 786 дней"
        },
        {
          id: 2, 
          name: "МБУ «СЕВЕРО-ЭВЕНСКИЙ ОЦ»",
          zone: "Северо-Эвенский ГО",
          deadline: "01.12.2019 / 2090 дней"
        }
      ]
    },
    {
      id: 2,
      subject: "Тверская область", 
      operators: [
        {
          id: 3,
          name: "ООО «ТСАХ»",
          zone: "Вся территория",
          deadline: "01.01.2019 / 2424 дня"
        }
      ]
    }
  ];

export const spechTech = [
  { id: 1, subject: 'Республика Дагестан', currentNeed: 124, plan2025: 0, fact2025: 0, leasingApplication: 0, percentage: 0 },
  { id: 2, subject: 'Томская область', currentNeed: 29, plan2025: 7, fact2025: 0, leasingApplication: 7, percentage: 0 },
  { id: 3, subject: 'Херсонская область', currentNeed: 30, plan2025: 27, fact2025: 8, leasingApplication: 0, percentage: 30 },
  { id: 4, subject: 'Чукотский АО', currentNeed: 8, plan2025: 3, fact2025: 1, leasingApplication: 2, percentage: 33 },
  { id: 5, subject: 'Запорожская область', currentNeed: 16, plan2025: 25, fact2025: 9, leasingApplication: 0, percentage: 36 },
  { id: 6, subject: 'Республика Крым', currentNeed: 37, plan2025: 52, fact2025: 29, leasingApplication: 6, percentage: 78 },
  { id: 7, subject: 'Луганская Народная Р.', currentNeed: 113, plan2025: 30, fact2025: 25, leasingApplication: 0, percentage: 83 },
  { id: 8, subject: 'Донецкая Народная Р.', currentNeed: 42, plan2025: 31, fact2025: 30, leasingApplication: 0, percentage: 97 },
  { id: 9, subject: 'Республика Тыва', currentNeed: 60, plan2025: 17, fact2025: 24, leasingApplication: 0, percentage: 141 },
  { id: 10, subject: 'Республика Алтай', currentNeed: 13, plan2025: 7, fact2025: 12, leasingApplication: 0, percentage: 171 },
  { id: 11, subject: 'Еврейская АО', currentNeed: 13, plan2025: 9, fact2025: 16, leasingApplication: 16, percentage: 178 },
];

export const ContainersPlacesPurchases = {
    "red_zone": [
        {
            "id": 1,
            "region": "Республика Алтай",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/1/",
            "budget": 24.7,
            "cont_places_additional": "0/68",
            "cont_places_additional_per": 0.0,
            "containers_additional": "0/141",
            "containers_additional_per": 0.0
        },
        {
            "id": 2,
            "region": "Чукотский Автономный Округ",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/2/",
            "budget": 14.3,
            "cont_places_additional": "0/25",
            "cont_places_additional_per": 0.0,
            "containers_additional": "0/15",
            "containers_additional_per": 0.0
        },
        {
            "id": 3,
            "region": "Кабардино-Балкарская Республика",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/3/",
            "budget": 8.7,
            "cont_places_additional": "0/12",
            "cont_places_additional_per": 0.0,
            "containers_additional": "0/40",
            "containers_additional_per": 0.0
        }
    ],
    "mid_zone": [
        {
            "id": 4,
            "region": "Республика Карелия",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/4/",
            "budget": 60.0,
            "cont_places_additional": "5/105",
            "cont_places_additional_per": 0.05,
            "containers_additional": "291/1172",
            "containers_additional_per": 0.25
        },
        {
            "id": 5,
            "region": "Иркутская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/5/",
            "budget": 200.9,
            "cont_places_additional": "42/352",
            "cont_places_additional_per": 0.12,
            "containers_additional": "820/3655",
            "containers_additional_per": 0.22
        }
    ],
    "green_zone": [
        {
            "id": 6,
            "region": "Еврейская Автономная Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/6/",
            "budget": 50.1,
            "cont_places_additional": "70/213",
            "cont_places_additional_per": 0.33,
            "containers_additional": "153/737",
            "containers_additional_per": 0.21
        },
        {
            "id": 7,
            "region": "Камчатский Край",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/7/",
            "budget": 34.4,
            "cont_places_additional": "9/44",
            "cont_places_additional_per": 0.2,
            "containers_additional": "95/258",
            "containers_additional_per": 0.37
        },
        {
            "id": 8,
            "region": "Новосибирская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/8/",
            "budget": 151.9,
            "cont_places_additional": "86/426",
            "cont_places_additional_per": 0.2,
            "containers_additional": "1608/3433",
            "containers_additional_per": 0.47
        },
        {
            "id": 9,
            "region": "Республика Бурятия",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/9/",
            "budget": 15.3,
            "cont_places_additional": "0/64",
            "cont_places_additional_per": 0.0,
            "containers_additional": "850/900",
            "containers_additional_per": 0.94
        },
        {
            "id": 10,
            "region": "Томская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/10/",
            "budget": 107.3,
            "cont_places_additional": "23/111",
            "cont_places_additional_per": 0.21,
            "containers_additional": "304/820",
            "containers_additional_per": 0.37
        },
        {
            "id": 11,
            "region": "Брянская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/11/",
            "budget": 33.8,
            "cont_places_additional": "39/69",
            "cont_places_additional_per": 0.57,
            "containers_additional": "14/225",
            "containers_additional_per": 0.06
        },
        {
            "id": 12,
            "region": "Самарская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/12/",
            "budget": 660.6,
            "cont_places_additional": "272/826",
            "cont_places_additional_per": 0.33,
            "containers_additional": "2021/6397",
            "containers_additional_per": 0.32
        },
        {
            "id": 13,
            "region": "Республика Дагестан",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/13/",
            "budget": 120.5,
            "cont_places_additional": "266/1066",
            "cont_places_additional_per": 0.25,
            "containers_additional": "1072/2700",
            "containers_additional_per": 0.4
        },
        {
            "id": 14,
            "region": "Республика Северная Осетия - Алания",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/14/",
            "budget": 14.3,
            "cont_places_additional": "37/131",
            "cont_places_additional_per": 0.28,
            "containers_additional": "220/522",
            "containers_additional_per": 0.42
        },
        {
            "id": 15,
            "region": "Красноярский Край",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/15/",
            "budget": 216.8,
            "cont_places_additional": "235/891",
            "cont_places_additional_per": 0.26,
            "containers_additional": "832/1847",
            "containers_additional_per": 0.45
        },
        {
            "id": 16,
            "region": "Забайкальский Край",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/16/",
            "budget": 147.5,
            "cont_places_additional": "169/235",
            "cont_places_additional_per": 0.72,
            "containers_additional": "0/1969",
            "containers_additional_per": 0.0
        },
        {
            "id": 17,
            "region": "Республика Хакасия",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/17/",
            "budget": 26.4,
            "cont_places_additional": "23/83",
            "cont_places_additional_per": 0.28,
            "containers_additional": "305/548",
            "containers_additional_per": 0.55
        },
        {
            "id": 18,
            "region": "Смоленская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/18/",
            "budget": 35.0,
            "cont_places_additional": "65/591",
            "cont_places_additional_per": 0.11,
            "containers_additional": "594/778",
            "containers_additional_per": 0.76
        },
        {
            "id": 20,
            "region": "Краснодарский Край",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/20/",
            "budget": 719.9,
            "cont_places_additional": "535/1616",
            "cont_places_additional_per": 0.33,
            "containers_additional": "4919/7825",
            "containers_additional_per": 0.63
        },
        {
            "id": 21,
            "region": "Ульяновская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/21/",
            "budget": 61.0,
            "cont_places_additional": "1/2",
            "cont_places_additional_per": 0.5,
            "containers_additional": "487/957",
            "containers_additional_per": 0.51
        },
        {
            "id": 22,
            "region": "Алтайский Край",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/22/",
            "budget": 64.2,
            "cont_places_additional": "200/318",
            "cont_places_additional_per": 0.63,
            "containers_additional": "877/2060",
            "containers_additional_per": 0.43
        },
        {
            "id": 23,
            "region": "Новгородская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/23/",
            "budget": 23.6,
            "cont_places_additional": "19/40",
            "cont_places_additional_per": 0.48,
            "containers_additional": "162/275",
            "containers_additional_per": 0.59
        },
        {
            "id": 24,
            "region": "Калининградская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/24/",
            "budget": 133.9,
            "cont_places_additional": "25/28",
            "cont_places_additional_per": 0.89,
            "containers_additional": "174/978",
            "containers_additional_per": 0.18
        },
        {
            "id": 25,
            "region": "Республика Тыва",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/25/",
            "budget": 19.2,
            "cont_places_additional": "0/162",
            "cont_places_additional_per": 0.0,
            "containers_additional": "532/486",
            "containers_additional_per": 1.0
        },
        {
            "id": 26,
            "region": "Оренбургская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/26/",
            "budget": 43.8,
            "cont_places_additional": "105/472",
            "cont_places_additional_per": 0.22,
            "containers_additional": "462/516",
            "containers_additional_per": 0.9
        },
        {
            "id": 27,
            "region": "Республика Саха (Якутия)",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/27/",
            "budget": 39.8,
            "cont_places_additional": "66/150",
            "cont_places_additional_per": 0.44,
            "containers_additional": "609/800",
            "containers_additional_per": 0.76
        },
        {
            "id": 28,
            "region": "Калужская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/28/",
            "budget": 32.9,
            "cont_places_additional": "35/45",
            "cont_places_additional_per": 0.78,
            "containers_additional": "322/661",
            "containers_additional_per": 0.49
        },
        {
            "id": 29,
            "region": "Орловская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/29/",
            "budget": 39.1,
            "cont_places_additional": "248/422",
            "cont_places_additional_per": 0.59,
            "containers_additional": "437/629",
            "containers_additional_per": 0.69
        },
        {
            "id": 30,
            "region": "Тверская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/30/",
            "budget": 77.6,
            "cont_places_additional": "84/182",
            "cont_places_additional_per": 0.46,
            "containers_additional": "1390/1681",
            "containers_additional_per": 0.83
        },
        {
            "id": 31,
            "region": "Пермский Край",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/31/",
            "budget": 286.8,
            "cont_places_additional": "517/900",
            "cont_places_additional_per": 0.57,
            "containers_additional": "1813/1885",
            "containers_additional_per": 0.96
        },
        {
            "id": 32,
            "region": "Карачаево-Черкесская Республика",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/32/",
            "budget": 3.2,
            "cont_places_additional": "10/10",
            "cont_places_additional_per": 1.0,
            "containers_additional": "30/41",
            "containers_additional_per": 0.73
        },
        {
            "id": 33,
            "region": "Белгородская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/33/",
            "budget": 35.5,
            "cont_places_additional": "64/49",
            "cont_places_additional_per": 1.0,
            "containers_additional": "92/169",
            "containers_additional_per": 0.54
        },
        {
            "id": 34,
            "region": "Республика Калмыкия",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/34/",
            "budget": 2.2,
            "cont_places_additional": "17/25",
            "cont_places_additional_per": 0.68,
            "containers_additional": "52/44",
            "containers_additional_per": 1.0
        },
        {
            "id": 35,
            "region": "Республика Ингушетия",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/35/",
            "budget": 6.0,
            "cont_places_additional": "9/10",
            "cont_places_additional_per": 0.9,
            "containers_additional": "212/212",
            "containers_additional_per": 1.0
        },
        {
            "id": 36,
            "region": "Ростовская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/36/",
            "budget": 275.9,
            "cont_places_additional": "100/75",
            "cont_places_additional_per": 1.0,
            "containers_additional": "3915/5339",
            "containers_additional_per": 0.73
        },
        {
            "id": 37,
            "region": "Архангельская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/37/",
            "budget": 20.0,
            "cont_places_additional": "1/0",
            "cont_places_additional_per": 1.0,
            "containers_additional": "181/155",
            "containers_additional_per": 1.0
        },
        {
            "id": 38,
            "region": "Псковская Область",
            "url": "http://127.0.0.1:8000/api/cont_places_purchases/38/",
            "budget": 10.4,
            "cont_places_additional": "31/90",
            "cont_places_additional_per": 0.34,
            "containers_additional": "1674/228",
            "containers_additional_per": 1.0
        }
    ]
}

export const weightControl = {
    "red_zone": [
        {
            "id": 4,
            "region": "Магаданская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/4/",
            "weight": 0.0
        },
        {
            "id": 5,
            "region": "Республика Дагестан",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/5/",
            "weight": 0.0
        }
    ],
    "gary_zone": [
        {
            "id": 3,
            "region": "Республика Тыва",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/3/",
            "weight": 0.0
        }
    ],
    "mid_red_zone": [
        {
            "id": 6,
            "region": "Республика Саха (Якутия)",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/6/",
            "weight": 0.06
        },
        {
            "id": 7,
            "region": "Г. Москва",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/7/",
            "weight": 0.14
        },
        {
            "id": 8,
            "region": "Омская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/8/",
            "weight": 0.16
        },
        {
            "id": 9,
            "region": "Республика Бурятия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/9/",
            "weight": 0.17
        },
        {
            "id": 10,
            "region": "Камчатский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/10/",
            "weight": 0.2
        }
    ],
    "mid_zone": [
        {
            "id": 19,
            "region": "Костромская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/19/",
            "weight": 0.22
        },
        {
            "id": 12,
            "region": "Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/12/",
            "weight": 0.27
        },
        {
            "id": 13,
            "region": "Хабаровский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/13/",
            "weight": 0.28
        },
        {
            "id": 14,
            "region": "Томская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/14/",
            "weight": 0.29
        },
        {
            "id": 15,
            "region": "Республика Карелия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/15/",
            "weight": 0.29
        },
        {
            "id": 20,
            "region": "Московская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/20/",
            "weight": 0.33
        },
        {
            "id": 21,
            "region": "Еврейская Автономная Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/21/",
            "weight": 0.33
        },
        {
            "id": 24,
            "region": "Архангельская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/24/",
            "weight": 0.42
        },
        {
            "id": 22,
            "region": "Новгородская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/22/",
            "weight": 0.42
        },
        {
            "id": 23,
            "region": "Краснодарский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/23/",
            "weight": 0.42
        },
        {
            "id": 25,
            "region": "Ярославская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/25/",
            "weight": 0.47
        },
        {
            "id": 26,
            "region": "Тверская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/26/",
            "weight": 0.48
        },
        {
            "id": 27,
            "region": "Ямало-Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/27/",
            "weight": 0.5
        },
        {
            "id": 28,
            "region": "Кабардино-Балкарская Республика",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/28/",
            "weight": 0.5
        },
        {
            "id": 29,
            "region": "Республика Ингушетия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/29/",
            "weight": 0.5
        },
        {
            "id": 30,
            "region": "Республика Калмыкия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/30/",
            "weight": 0.5
        },
        {
            "id": 31,
            "region": "Республика Мордовия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/31/",
            "weight": 0.5
        }
    ],
    "green_zone": [
        {
            "id": 32,
            "region": "Саратовская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/32/",
            "weight": 0.53
        },
        {
            "id": 33,
            "region": "Ханты-Мансийский Автономный Округ - Югра",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/33/",
            "weight": 0.54
        },
        {
            "id": 34,
            "region": "Тамбовская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/34/",
            "weight": 0.55
        },
        {
            "id": 35,
            "region": "Свердловская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/35/",
            "weight": 0.55
        },
        {
            "id": 36,
            "region": "Алтайский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/36/",
            "weight": 0.56
        },
        {
            "id": 37,
            "region": "Псковская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/37/",
            "weight": 0.58
        },
        {
            "id": 39,
            "region": "Карачаево-Черкесская Республика",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/39/",
            "weight": 0.6
        },
        {
            "id": 38,
            "region": "Новосибирская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/38/",
            "weight": 0.6
        },
        {
            "id": 40,
            "region": "Чеченская Республика",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/40/",
            "weight": 0.64
        },
        {
            "id": 41,
            "region": "Республика Марий Эл",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/41/",
            "weight": 0.65
        },
        {
            "id": 42,
            "region": "Иркутская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/42/",
            "weight": 0.65
        },
        {
            "id": 45,
            "region": "Кемеровская Область - Кузбасс",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/45/",
            "weight": 0.67
        },
        {
            "id": 44,
            "region": "Астраханская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/44/",
            "weight": 0.67
        },
        {
            "id": 46,
            "region": "Курганская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/46/",
            "weight": 0.67
        },
        {
            "id": 43,
            "region": "Мурманская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/43/",
            "weight": 0.67
        },
        {
            "id": 47,
            "region": "Оренбургская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/47/",
            "weight": 0.69
        },
        {
            "id": 48,
            "region": "Вологодская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/48/",
            "weight": 0.7
        },
        {
            "id": 49,
            "region": "Тульская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/49/",
            "weight": 0.72
        },
        {
            "id": 50,
            "region": "Приморский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/50/",
            "weight": 0.73
        },
        {
            "id": 51,
            "region": "Республика Алтай",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/51/",
            "weight": 0.75
        },
        {
            "id": 52,
            "region": "Брянская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/52/",
            "weight": 0.75
        },
        {
            "id": 16,
            "region": "Ставропольский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/16/",
            "weight": 0.77
        },
        {
            "id": 53,
            "region": "Красноярский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/53/",
            "weight": 0.77
        },
        {
            "id": 54,
            "region": "Республика Татарстан",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/54/",
            "weight": 0.77
        },
        {
            "id": 58,
            "region": "Рязанская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/58/",
            "weight": 0.8
        },
        {
            "id": 57,
            "region": "Курская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/57/",
            "weight": 0.8
        },
        {
            "id": 56,
            "region": "Смоленская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/56/",
            "weight": 0.8
        },
        {
            "id": 59,
            "region": "Пермский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/59/",
            "weight": 0.83
        },
        {
            "id": 60,
            "region": "Воронежская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/60/",
            "weight": 0.83
        },
        {
            "id": 61,
            "region": "Чувашская Республика - Чувашия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/61/",
            "weight": 0.87
        },
        {
            "id": 62,
            "region": "Республика Башкортостан",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/62/",
            "weight": 0.88
        },
        {
            "id": 63,
            "region": "Владимирская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/63/",
            "weight": 0.89
        },
        {
            "id": 64,
            "region": "Удмуртская Республика",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/64/",
            "weight": 0.89
        },
        {
            "id": 65,
            "region": "Ульяновская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/65/",
            "weight": 0.89
        },
        {
            "id": 66,
            "region": "Калужская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/66/",
            "weight": 0.91
        },
        {
            "id": 84,
            "region": "Ростовская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/84/",
            "weight": 1.0
        },
        {
            "id": 83,
            "region": "Республика Хакасия",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/83/",
            "weight": 1.0
        },
        {
            "id": 82,
            "region": "Республика Северная Осетия - Алания",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/82/",
            "weight": 1.0
        },
        {
            "id": 79,
            "region": "Республика Адыгея",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/79/",
            "weight": 1.0
        },
        {
            "id": 81,
            "region": "Республика Крым",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/81/",
            "weight": 1.0
        },
        {
            "id": 80,
            "region": "Республика Коми",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/80/",
            "weight": 1.0
        },
        {
            "id": 69,
            "region": "Амурская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/69/",
            "weight": 1.0
        },
        {
            "id": 85,
            "region": "Самарская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/85/",
            "weight": 1.0
        },
        {
            "id": 86,
            "region": "Сахалинская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/86/",
            "weight": 1.0
        },
        {
            "id": 87,
            "region": "Тюменская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/87/",
            "weight": 1.0
        },
        {
            "id": 88,
            "region": "Челябинская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/88/",
            "weight": 1.0
        },
        {
            "id": 89,
            "region": "Чукотский Автономный Округ",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/89/",
            "weight": 1.0
        },
        {
            "id": 91,
            "region": "Пензенская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/91/",
            "weight": 1.0
        },
        {
            "id": 78,
            "region": "Орловская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/78/",
            "weight": 1.0
        },
        {
            "id": 77,
            "region": "Нижегородская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/77/",
            "weight": 1.0
        },
        {
            "id": 76,
            "region": "Калининградская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/76/",
            "weight": 1.0
        },
        {
            "id": 75,
            "region": "Ивановская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/75/",
            "weight": 1.0
        },
        {
            "id": 74,
            "region": "Забайкальский Край",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/74/",
            "weight": 1.0
        },
        {
            "id": 73,
            "region": "Г. Севастополь",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/73/",
            "weight": 1.0
        },
        {
            "id": 72,
            "region": "Г. Санкт-Петербург",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/72/",
            "weight": 1.0
        },
        {
            "id": 71,
            "region": "Волгоградская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/71/",
            "weight": 1.0
        },
        {
            "id": 70,
            "region": "Белгородская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/70/",
            "weight": 1.0
        },
        {
            "id": 68,
            "region": "Ленинградская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/68/",
            "weight": 1.0
        },
        {
            "id": 67,
            "region": "Липецкая Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/67/",
            "weight": 1.0
        },
        {
            "id": 11,
            "region": "Кировская Область",
            "url": "http://127.0.0.1:8000/api/weight_control_fgis/11/",
            "weight": 1.0
        }
    ]
}

export const photoFixation = {
    "red_zone": [
        {
            "id": 2,
            "region": "Республика Дагестан",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/2/",
            "weight": 0.0
        },
        {
            "id": 9,
            "region": "Ивановская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/9/",
            "weight": 0.0
        },
        {
            "id": 8,
            "region": "Кабардино-Балкарская Республика",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/8/",
            "weight": 0.0
        },
        {
            "id": 1,
            "region": "Республика Ингушетия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/1/",
            "weight": 0.0
        }
    ],
    "mid_red_zone": [
        {
            "id": 10,
            "region": "Краснодарский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/10/",
            "weight": 0.69
        },
        {
            "id": 3,
            "region": "Красноярский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/3/",
            "weight": 0.69
        },
        {
            "id": 11,
            "region": "Республика Карелия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/11/",
            "weight": 1.7
        },
        {
            "id": 12,
            "region": "Республика Тыва",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/12/",
            "weight": 1.73
        },
        {
            "id": 13,
            "region": "Приморский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/13/",
            "weight": 2.39
        },
        {
            "id": 14,
            "region": "Ставропольский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/14/",
            "weight": 2.61
        },
        {
            "id": 15,
            "region": "Республика Калмыкия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/15/",
            "weight": 2.75
        },
        {
            "id": 16,
            "region": "Республика Алтай",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/16/",
            "weight": 4.94
        },
        {
            "id": 17,
            "region": "Курская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/17/",
            "weight": 5.15
        },
        {
            "id": 18,
            "region": "Ямало-Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/18/",
            "weight": 5.65
        },
        {
            "id": 19,
            "region": "Белгородская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/19/",
            "weight": 5.98
        },
        {
            "id": 20,
            "region": "Томская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/20/",
            "weight": 6.72
        },
        {
            "id": 4,
            "region": "Республика Саха (Якутия)",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/4/",
            "weight": 9.08
        },
        {
            "id": 21,
            "region": "Пензенская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/21/",
            "weight": 9.15
        },
        {
            "id": 22,
            "region": "Магаданская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/22/",
            "weight": 9.93
        },
        {
            "id": 23,
            "region": "Амурская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/23/",
            "weight": 10.78
        },
        {
            "id": 24,
            "region": "Московская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/24/",
            "weight": 11.84
        },
        {
            "id": 25,
            "region": "Г. Севастополь",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/25/",
            "weight": 12.04
        },
        {
            "id": 26,
            "region": "Воронежская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/26/",
            "weight": 13.1
        },
        {
            "id": 27,
            "region": "Смоленская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/27/",
            "weight": 14.44
        },
        {
            "id": 5,
            "region": "Алтайский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/5/",
            "weight": 15.13
        },
        {
            "id": 28,
            "region": "Чувашская Республика - Чувашия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/28/",
            "weight": 15.39
        },
        {
            "id": 29,
            "region": "Псковская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/29/",
            "weight": 15.92
        },
        {
            "id": 30,
            "region": "Иркутская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/30/",
            "weight": 16.14
        },
        {
            "id": 31,
            "region": "Забайкальский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/31/",
            "weight": 17.32
        },
        {
            "id": 32,
            "region": "Республика Мордовия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/32/",
            "weight": 17.66
        },
        {
            "id": 33,
            "region": "Тверская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/33/",
            "weight": 17.91
        },
        {
            "id": 34,
            "region": "Карачаево-Черкесская Республика",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/34/",
            "weight": 18.64
        },
        {
            "id": 35,
            "region": "Еврейская Автономная Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/35/",
            "weight": 18.74
        },
        {
            "id": 36,
            "region": "Республика Крым",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/36/",
            "weight": 19.19
        },
        {
            "id": 37,
            "region": "Чукотский Автономный Округ",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/37/",
            "weight": 19.84
        },
        {
            "id": 38,
            "region": "Астраханская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/38/",
            "weight": 19.9
        },
        {
            "id": 39,
            "region": "Камчатский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/39/",
            "weight": 20.86
        },
        {
            "id": 40,
            "region": "Новгородская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/40/",
            "weight": 21.04
        },
        {
            "id": 41,
            "region": "Республика Адыгея",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/41/",
            "weight": 21.62
        },
        {
            "id": 42,
            "region": "Свердловская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/42/",
            "weight": 23.28
        },
        {
            "id": 43,
            "region": "Ульяновская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/43/",
            "weight": 23.34
        },
        {
            "id": 44,
            "region": "Новосибирская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/44/",
            "weight": 24.13
        },
        {
            "id": 45,
            "region": "Республика Бурятия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/45/",
            "weight": 27.35
        },
        {
            "id": 46,
            "region": "Оренбургская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/46/",
            "weight": 28.34
        },
        {
            "id": 47,
            "region": "Ростовская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/47/",
            "weight": 28.44
        },
        {
            "id": 48,
            "region": "Кемеровская Область - Кузбасс",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/48/",
            "weight": 29.31
        },
        {
            "id": 49,
            "region": "Республика Хакасия",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/49/",
            "weight": 29.42
        },
        {
            "id": 50,
            "region": "Хабаровский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/50/",
            "weight": 29.55
        },
        {
            "id": 51,
            "region": "Липецкая Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/51/",
            "weight": 29.67
        },
        {
            "id": 52,
            "region": "Челябинская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/52/",
            "weight": 29.81
        }
    ],
    "mid_zone": [
        {
            "id": 6,
            "region": "Брянская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/6/",
            "weight": 30.58
        },
        {
            "id": 53,
            "region": "Орловская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/53/",
            "weight": 30.67
        },
        {
            "id": 54,
            "region": "Тюменская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/54/",
            "weight": 30.78
        },
        {
            "id": 55,
            "region": "Архангельская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/55/",
            "weight": 30.87
        },
        {
            "id": 56,
            "region": "Мурманская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/56/",
            "weight": 31.07
        },
        {
            "id": 57,
            "region": "Костромская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/57/",
            "weight": 32.06
        },
        {
            "id": 58,
            "region": "Ханты-Мансийский Автономный Округ - Югра",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/58/",
            "weight": 32.14
        },
        {
            "id": 59,
            "region": "Кировская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/59/",
            "weight": 33.38
        },
        {
            "id": 60,
            "region": "Рязанская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/60/",
            "weight": 34.11
        },
        {
            "id": 61,
            "region": "Владимирская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/61/",
            "weight": 34.12
        },
        {
            "id": 62,
            "region": "Самарская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/62/",
            "weight": 34.78
        },
        {
            "id": 63,
            "region": "Саратовская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/63/",
            "weight": 35.22
        },
        {
            "id": 64,
            "region": "Калининградская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/64/",
            "weight": 36.19
        },
        {
            "id": 65,
            "region": "Сахалинская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/65/",
            "weight": 37.74
        },
        {
            "id": 66,
            "region": "Республика Марий Эл",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/66/",
            "weight": 38.0
        },
        {
            "id": 67,
            "region": "Удмуртская Республика",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/67/",
            "weight": 38.25
        },
        {
            "id": 68,
            "region": "Калужская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/68/",
            "weight": 39.45
        },
        {
            "id": 69,
            "region": "Республика Татарстан",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/69/",
            "weight": 39.5
        },
        {
            "id": 70,
            "region": "Вологодская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/70/",
            "weight": 40.96
        },
        {
            "id": 71,
            "region": "Нижегородская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/71/",
            "weight": 41.49
        },
        {
            "id": 73,
            "region": "Ярославская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/73/",
            "weight": 43.15
        },
        {
            "id": 72,
            "region": "Ленинградская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/72/",
            "weight": 43.4
        },
        {
            "id": 74,
            "region": "Республика Башкортостан",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/74/",
            "weight": 44.1
        },
        {
            "id": 75,
            "region": "Тамбовская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/75/",
            "weight": 44.66
        },
        {
            "id": 7,
            "region": "Г. Москва",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/7/",
            "weight": 45.24
        },
        {
            "id": 76,
            "region": "Пермский Край",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/76/",
            "weight": 46.56
        },
        {
            "id": 77,
            "region": "Республика Северная Осетия - Алания",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/77/",
            "weight": 47.0
        },
        {
            "id": 78,
            "region": "Омская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/78/",
            "weight": 48.86
        },
        {
            "id": 79,
            "region": "Тульская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/79/",
            "weight": 52.82
        },
        {
            "id": 80,
            "region": "Г. Санкт-Петербург",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/80/",
            "weight": 53.16
        },
        {
            "id": 81,
            "region": "Волгоградская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/81/",
            "weight": 53.36
        },
        {
            "id": 82,
            "region": "Чеченская Республика",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/82/",
            "weight": 54.39
        },
        {
            "id": 83,
            "region": "Курганская Область",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/83/",
            "weight": 60.28
        },
        {
            "id": 84,
            "region": "Республика Коми",
            "url": "http://127.0.0.1:8000/api/container_places_photofixation/84/",
            "weight": 69.01
        }
    ]
}

export const videoFixation = {
    "gray_zone": [
        {
            "id": 1,
            "region": "Амурская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/1/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 2,
            "region": "Белгородская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/2/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 3,
            "region": "Брянская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/3/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 13,
            "region": "Еврейская Автономная Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/13/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 14,
            "region": "Кабардино-Балкарская Республика",
            "url": "http://127.0.0.1:8000/api/video_fixation/14/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 15,
            "region": "Камчатский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/15/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 16,
            "region": "Карачаево-Черкесская Республика",
            "url": "http://127.0.0.1:8000/api/video_fixation/16/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 17,
            "region": "Кемеровская Область - Кузбасс",
            "url": "http://127.0.0.1:8000/api/video_fixation/17/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 18,
            "region": "Костромская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/18/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 19,
            "region": "Курская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/19/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 20,
            "region": "Новосибирская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/20/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 21,
            "region": "Орловская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/21/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 22,
            "region": "Республика Алтай",
            "url": "http://127.0.0.1:8000/api/video_fixation/22/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 23,
            "region": "Республика Ингушетия",
            "url": "http://127.0.0.1:8000/api/video_fixation/23/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 24,
            "region": "Республика Коми",
            "url": "http://127.0.0.1:8000/api/video_fixation/24/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 25,
            "region": "Республика Татарстан",
            "url": "http://127.0.0.1:8000/api/video_fixation/25/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 26,
            "region": "Республика Тыва",
            "url": "http://127.0.0.1:8000/api/video_fixation/26/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 27,
            "region": "Свердловская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/27/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 28,
            "region": "Тверская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/28/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 29,
            "region": "Томская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/29/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 30,
            "region": "Хабаровский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/30/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 31,
            "region": "Чеченская Республика",
            "url": "http://127.0.0.1:8000/api/video_fixation/31/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        },
        {
            "id": 32,
            "region": "Чукотский Автономный Округ",
            "url": "http://127.0.0.1:8000/api/video_fixation/32/",
            "cameras_exist": false,
            "integration_in_process": false,
            "actually_transmitting": false
        }
    ],
    "mid_zone": [
        {
            "id": 4,
            "region": "Архангельская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/4/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 5,
            "region": "Воронежская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/5/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 6,
            "region": "Ленинградская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/6/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 11,
            "region": "Г. Москва",
            "url": "http://127.0.0.1:8000/api/video_fixation/11/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 33,
            "region": "Астраханская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/33/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 34,
            "region": "Республика Бурятия",
            "url": "http://127.0.0.1:8000/api/video_fixation/34/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 35,
            "region": "Республика Дагестан",
            "url": "http://127.0.0.1:8000/api/video_fixation/35/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        },
        {
            "id": 36,
            "region": "Пермский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/36/",
            "cameras_exist": true,
            "integration_in_process": true,
            "actually_transmitting": false
        }
    ],
    "green_zone": [
        {
            "id": 7,
            "region": "Алтайский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/7/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 9,
            "region": "Владимирская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/9/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 10,
            "region": "Волгоградская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/10/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 12,
            "region": "Забайкальский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/12/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 37,
            "region": "Вологодская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/37/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 38,
            "region": "Ивановская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/38/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 39,
            "region": "Иркутская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/39/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 40,
            "region": "Калужская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/40/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 41,
            "region": "Калининградская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/41/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 42,
            "region": "Кировская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/42/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 43,
            "region": "Краснодарский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/43/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 44,
            "region": "Красноярский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/44/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 45,
            "region": "Курганская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/45/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 46,
            "region": "Липецкая Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/46/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 47,
            "region": "Магаданская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/47/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 48,
            "region": "Московская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/48/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 49,
            "region": "Мурманская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/49/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 50,
            "region": "Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/video_fixation/50/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 51,
            "region": "Нижегородская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/51/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 52,
            "region": "Новгородская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/52/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 53,
            "region": "Омская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/53/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 54,
            "region": "Оренбургская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/54/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 55,
            "region": "Пензенская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/55/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 56,
            "region": "Приморский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/56/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 57,
            "region": "Псковская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/57/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 58,
            "region": "Республика Адыгея",
            "url": "http://127.0.0.1:8000/api/video_fixation/58/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 59,
            "region": "Республика Башкортостан",
            "url": "http://127.0.0.1:8000/api/video_fixation/59/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 60,
            "region": "Республика Калмыкия",
            "url": "http://127.0.0.1:8000/api/video_fixation/60/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 61,
            "region": "Республика Карелия",
            "url": "http://127.0.0.1:8000/api/video_fixation/61/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 62,
            "region": "Республика Крым",
            "url": "http://127.0.0.1:8000/api/video_fixation/62/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 63,
            "region": "Республика Марий Эл",
            "url": "http://127.0.0.1:8000/api/video_fixation/63/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 64,
            "region": "Республика Мордовия",
            "url": "http://127.0.0.1:8000/api/video_fixation/64/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 65,
            "region": "Республика Саха (Якутия)",
            "url": "http://127.0.0.1:8000/api/video_fixation/65/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 66,
            "region": "Республика Северная Осетия - Алания",
            "url": "http://127.0.0.1:8000/api/video_fixation/66/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 67,
            "region": "Республика Хакасия",
            "url": "http://127.0.0.1:8000/api/video_fixation/67/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 68,
            "region": "Ростовская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/68/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 69,
            "region": "Рязанская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/69/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 70,
            "region": "Самарская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/70/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 71,
            "region": "Саратовская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/71/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 72,
            "region": "Сахалинская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/72/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 73,
            "region": "Смоленская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/73/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 74,
            "region": "Ставропольский Край",
            "url": "http://127.0.0.1:8000/api/video_fixation/74/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 75,
            "region": "Тамбовская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/75/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 76,
            "region": "Тульская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/76/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 77,
            "region": "Тюменская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/77/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 78,
            "region": "Удмуртская Республика",
            "url": "http://127.0.0.1:8000/api/video_fixation/78/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 79,
            "region": "Ульяновская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/79/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 80,
            "region": "Ханты-Мансийский Автономный Округ - Югра",
            "url": "http://127.0.0.1:8000/api/video_fixation/80/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 81,
            "region": "Челябинская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/81/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 82,
            "region": "Чувашская Республика - Чувашия",
            "url": "http://127.0.0.1:8000/api/video_fixation/82/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 83,
            "region": "Ямало-Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/video_fixation/83/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 84,
            "region": "Ярославская Область",
            "url": "http://127.0.0.1:8000/api/video_fixation/84/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 85,
            "region": "Г. Санкт-Петербург",
            "url": "http://127.0.0.1:8000/api/video_fixation/85/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        },
        {
            "id": 86,
            "region": "Г. Севастополь",
            "url": "http://127.0.0.1:8000/api/video_fixation/86/",
            "cameras_exist": true,
            "integration_in_process": false,
            "actually_transmitting": true
        }
    ]
}

export const glonasData = {
    "red_zone": [
        {
            "id": 1,
            "region": "Республика Дагестан",
            "url": "http://127.0.0.1:8000/api/glonass_data/1/",
            "tech_data": 127,
            "transducer": 0,
            "glonass_data_fill": 0.0
        },
        {
            "id": 2,
            "region": "Республика Ингушетия",
            "url": "http://127.0.0.1:8000/api/glonass_data/2/",
            "tech_data": 1,
            "transducer": 0,
            "glonass_data_fill": 0.0
        }
    ],
    "mid_zone": [
        {
            "id": 3,
            "region": "Г. Севастополь",
            "url": "http://127.0.0.1:8000/api/glonass_data/3/",
            "tech_data": 97,
            "transducer": 29,
            "glonass_data_fill": 0.3
        },
        {
            "id": 4,
            "region": "Магаданская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/4/",
            "tech_data": 35,
            "transducer": 11,
            "glonass_data_fill": 0.31
        },
        {
            "id": 5,
            "region": "Омская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/5/",
            "tech_data": 217,
            "transducer": 67,
            "glonass_data_fill": 0.31
        },
        {
            "id": 12,
            "region": "Ивановская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/12/",
            "tech_data": 91,
            "transducer": 32,
            "glonass_data_fill": 0.35
        },
        {
            "id": 13,
            "region": "Чукотский Автономный Округ",
            "url": "http://127.0.0.1:8000/api/glonass_data/13/",
            "tech_data": 49,
            "transducer": 24,
            "glonass_data_fill": 0.49
        }
    ],
    "green_zone": [
        {
            "id": 6,
            "region": "Республика Тыва",
            "url": "http://127.0.0.1:8000/api/glonass_data/6/",
            "tech_data": 41,
            "transducer": 24,
            "glonass_data_fill": 0.51
        },
        {
            "id": 7,
            "region": "Тамбовская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/7/",
            "tech_data": 243,
            "transducer": 127,
            "glonass_data_fill": 0.52
        },
        {
            "id": 8,
            "region": "Карачаево-Черкесская Республика",
            "url": "http://127.0.0.1:8000/api/glonass_data/8/",
            "tech_data": 68,
            "transducer": 36,
            "glonass_data_fill": 0.53
        },
        {
            "id": 9,
            "region": "Чеченская Республика",
            "url": "http://127.0.0.1:8000/api/glonass_data/9/",
            "tech_data": 107,
            "transducer": 106,
            "glonass_data_fill": 0.99
        },
        {
            "id": 10,
            "region": "Г. Москва",
            "url": "http://127.0.0.1:8000/api/glonass_data/10/",
            "tech_data": 2017,
            "transducer": 1549,
            "glonass_data_fill": 0.77
        },
        {
            "id": 11,
            "region": "Алтайский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/11/",
            "tech_data": 309,
            "transducer": 267,
            "glonass_data_fill": 0.86
        },
        {
            "id": 14,
            "region": "Амурская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/14/",
            "tech_data": 265,
            "transducer": 168,
            "glonass_data_fill": 0.63
        },
        {
            "id": 15,
            "region": "Архангельская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/15/",
            "tech_data": 257,
            "transducer": 217,
            "glonass_data_fill": 0.84
        },
        {
            "id": 16,
            "region": "Белгородская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/16/",
            "tech_data": 330,
            "transducer": 295,
            "glonass_data_fill": 0.89
        },
        {
            "id": 17,
            "region": "Брянская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/17/",
            "tech_data": 254,
            "transducer": 191,
            "glonass_data_fill": 0.75
        },
        {
            "id": 18,
            "region": "Владимирская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/18/",
            "tech_data": 154,
            "transducer": 120,
            "glonass_data_fill": 0.78
        },
        {
            "id": 19,
            "region": "Волгоградская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/19/",
            "tech_data": 200,
            "transducer": 171,
            "glonass_data_fill": 0.86
        },
        {
            "id": 20,
            "region": "Воронежская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/20/",
            "tech_data": 477,
            "transducer": 313,
            "glonass_data_fill": 0.66
        },
        {
            "id": 21,
            "region": "Г. Санкт-Петербург",
            "url": "http://127.0.0.1:8000/api/glonass_data/21/",
            "tech_data": 931,
            "transducer": 864,
            "glonass_data_fill": 0.93
        },
        {
            "id": 22,
            "region": "Еврейская Автономная Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/22/",
            "tech_data": 28,
            "transducer": 20,
            "glonass_data_fill": 0.71
        },
        {
            "id": 23,
            "region": "Забайкальский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/23/",
            "tech_data": 110,
            "transducer": 92,
            "glonass_data_fill": 0.84
        },
        {
            "id": 24,
            "region": "Иркутская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/24/",
            "tech_data": 370,
            "transducer": 272,
            "glonass_data_fill": 0.74
        },
        {
            "id": 25,
            "region": "Кабардино-Балкарская Республика",
            "url": "http://127.0.0.1:8000/api/glonass_data/25/",
            "tech_data": 78,
            "transducer": 56,
            "glonass_data_fill": 0.72
        },
        {
            "id": 26,
            "region": "Калининградская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/26/",
            "tech_data": 166,
            "transducer": 137,
            "glonass_data_fill": 0.83
        },
        {
            "id": 27,
            "region": "Калужская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/27/",
            "tech_data": 248,
            "transducer": 225,
            "glonass_data_fill": 0.91
        },
        {
            "id": 28,
            "region": "Камчатский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/28/",
            "tech_data": 119,
            "transducer": 93,
            "glonass_data_fill": 0.78
        },
        {
            "id": 29,
            "region": "Кемеровская Область - Кузбасс",
            "url": "http://127.0.0.1:8000/api/glonass_data/29/",
            "tech_data": 274,
            "transducer": 164,
            "glonass_data_fill": 0.6
        },
        {
            "id": 30,
            "region": "Кировская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/30/",
            "tech_data": 212,
            "transducer": 194,
            "glonass_data_fill": 0.92
        },
        {
            "id": 31,
            "region": "Костромская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/31/",
            "tech_data": 117,
            "transducer": 109,
            "glonass_data_fill": 0.93
        },
        {
            "id": 32,
            "region": "Краснодарский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/32/",
            "tech_data": 760,
            "transducer": 597,
            "glonass_data_fill": 0.79
        },
        {
            "id": 33,
            "region": "Красноярский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/33/",
            "tech_data": 563,
            "transducer": 457,
            "glonass_data_fill": 0.81
        },
        {
            "id": 34,
            "region": "Курская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/34/",
            "tech_data": 199,
            "transducer": 162,
            "glonass_data_fill": 0.81
        },
        {
            "id": 35,
            "region": "Ленинградская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/35/",
            "tech_data": 372,
            "transducer": 263,
            "glonass_data_fill": 0.71
        },
        {
            "id": 36,
            "region": "Липецкая Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/36/",
            "tech_data": 190,
            "transducer": 165,
            "glonass_data_fill": 0.87
        },
        {
            "id": 37,
            "region": "Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/glonass_data/37/",
            "tech_data": 21,
            "transducer": 15,
            "glonass_data_fill": 0.71
        },
        {
            "id": 38,
            "region": "Нижегородская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/38/",
            "tech_data": 424,
            "transducer": 345,
            "glonass_data_fill": 0.81
        },
        {
            "id": 39,
            "region": "Республика Карелия",
            "url": "http://127.0.0.1:8000/api/glonass_data/39/",
            "tech_data": 148,
            "transducer": 94,
            "glonass_data_fill": 0.64
        },
        {
            "id": 40,
            "region": "Республика Саха (Якутия)",
            "url": "http://127.0.0.1:8000/api/glonass_data/40/",
            "tech_data": 173,
            "transducer": 111,
            "glonass_data_fill": 0.64
        },
        {
            "id": 41,
            "region": "Республика Северная Осетия - Алания",
            "url": "http://127.0.0.1:8000/api/glonass_data/41/",
            "tech_data": 62,
            "transducer": 40,
            "glonass_data_fill": 0.65
        },
        {
            "id": 42,
            "region": "Приморский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/42/",
            "tech_data": 517,
            "transducer": 353,
            "glonass_data_fill": 0.68
        },
        {
            "id": 43,
            "region": "Республика Марий Эл",
            "url": "http://127.0.0.1:8000/api/glonass_data/43/",
            "tech_data": 92,
            "transducer": 65,
            "glonass_data_fill": 0.71
        },
        {
            "id": 44,
            "region": "Тверская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/44/",
            "tech_data": 181,
            "transducer": 128,
            "glonass_data_fill": 0.71
        },
        {
            "id": 45,
            "region": "Республика Алтай",
            "url": "http://127.0.0.1:8000/api/glonass_data/45/",
            "tech_data": 25,
            "transducer": 19,
            "glonass_data_fill": 0.76
        },
        {
            "id": 46,
            "region": "Ямало-Ненецкий Автономный Округ",
            "url": "http://127.0.0.1:8000/api/glonass_data/46/",
            "tech_data": 209,
            "transducer": 159,
            "glonass_data_fill": 0.76
        },
        {
            "id": 47,
            "region": "Челябинская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/47/",
            "tech_data": 586,
            "transducer": 457,
            "glonass_data_fill": 0.78
        },
        {
            "id": 48,
            "region": "Ульяновская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/48/",
            "tech_data": 135,
            "transducer": 110,
            "glonass_data_fill": 0.81
        },
        {
            "id": 49,
            "region": "Оренбургская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/49/",
            "tech_data": 217,
            "transducer": 179,
            "glonass_data_fill": 0.82
        },
        {
            "id": 50,
            "region": "Республика Татарстан",
            "url": "http://127.0.0.1:8000/api/glonass_data/50/",
            "tech_data": 505,
            "transducer": 416,
            "glonass_data_fill": 0.82
        },
        {
            "id": 51,
            "region": "Чувашская Республика - Чувашия",
            "url": "http://127.0.0.1:8000/api/glonass_data/51/",
            "tech_data": 148,
            "transducer": 122,
            "glonass_data_fill": 0.82
        },
        {
            "id": 52,
            "region": "Пензенская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/52/",
            "tech_data": 236,
            "transducer": 196,
            "glonass_data_fill": 0.83
        },
        {
            "id": 53,
            "region": "Пермский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/53/",
            "tech_data": 382,
            "transducer": 317,
            "glonass_data_fill": 0.83
        },
        {
            "id": 54,
            "region": "Ханты-Мансийский Автономный Округ - Югра",
            "url": "http://127.0.0.1:8000/api/glonass_data/54/",
            "tech_data": 311,
            "transducer": 257,
            "glonass_data_fill": 0.83
        },
        {
            "id": 55,
            "region": "Новгородская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/55/",
            "tech_data": 85,
            "transducer": 71,
            "glonass_data_fill": 84.0
        },
        {
            "id": 56,
            "region": "Республика Башкортостан",
            "url": "http://127.0.0.1:8000/api/glonass_data/56/",
            "tech_data": 575,
            "transducer": 483,
            "glonass_data_fill": 0.84
        },
        {
            "id": 57,
            "region": "Республика Хакасия",
            "url": "http://127.0.0.1:8000/api/glonass_data/57/",
            "tech_data": 51,
            "transducer": 43,
            "glonass_data_fill": 0.84
        },
        {
            "id": 58,
            "region": "Свердловская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/58/",
            "tech_data": 797,
            "transducer": 696,
            "glonass_data_fill": 0.87
        },
        {
            "id": 59,
            "region": "Республика Коми",
            "url": "http://127.0.0.1:8000/api/glonass_data/59/",
            "tech_data": 163,
            "transducer": 144,
            "glonass_data_fill": 0.88
        },
        {
            "id": 60,
            "region": "Смоленская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/60/",
            "tech_data": 112,
            "transducer": 99,
            "glonass_data_fill": 0.88
        },
        {
            "id": 61,
            "region": "Республика Крым",
            "url": "http://127.0.0.1:8000/api/glonass_data/61/",
            "tech_data": 410,
            "transducer": 363,
            "glonass_data_fill": 0.89
        },
        {
            "id": 62,
            "region": "Удмуртская Республика",
            "url": "http://127.0.0.1:8000/api/glonass_data/62/",
            "tech_data": 170,
            "transducer": 151,
            "glonass_data_fill": 0.89
        },
        {
            "id": 63,
            "region": "Республика Бурятия",
            "url": "http://127.0.0.1:8000/api/glonass_data/63/",
            "tech_data": 198,
            "transducer": 179,
            "glonass_data_fill": 0.9
        },
        {
            "id": 64,
            "region": "Орловская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/64/",
            "tech_data": 96,
            "transducer": 87,
            "glonass_data_fill": 0.91
        },
        {
            "id": 65,
            "region": "Ростовская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/65/",
            "tech_data": 1368,
            "transducer": 1243,
            "glonass_data_fill": 0.91
        },
        {
            "id": 66,
            "region": "Псковская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/66/",
            "tech_data": 102,
            "transducer": 94,
            "glonass_data_fill": 0.92
        },
        {
            "id": 67,
            "region": "Тюменская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/67/",
            "tech_data": 297,
            "transducer": 257,
            "glonass_data_fill": 0.92
        },
        {
            "id": 68,
            "region": "Республика Мордовия",
            "url": "http://127.0.0.1:8000/api/glonass_data/68/",
            "tech_data": 92,
            "transducer": 86,
            "glonass_data_fill": 0.93
        },
        {
            "id": 69,
            "region": "Рязанская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/69/",
            "tech_data": 275,
            "transducer": 255,
            "glonass_data_fill": 0.93
        },
        {
            "id": 70,
            "region": "Курганская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/70/",
            "tech_data": 88,
            "transducer": 83,
            "glonass_data_fill": 0.94
        },
        {
            "id": 71,
            "region": "Хабаровский Край",
            "url": "http://127.0.0.1:8000/api/glonass_data/71/",
            "tech_data": 210,
            "transducer": 197,
            "glonass_data_fill": 0.94
        },
        {
            "id": 72,
            "region": "Сахалинская Область",
            "url": "http://127.0.0.1:8000/api/glonass_data/72/",
            "tech_data": 171,
            "transducer": 163,
            "glonass_data_fill": 0.95
        }
    ]
}

export const f_districtsData = [
    {
      "id": 1,
      "name": "Дальневосточный федеральный округ",
      "abbreviation": "ДФО",
      "subjects": [
        {"id": 1, "name": "Приморский край"},
        {"id": 2, "name": "Забайкальский край"},
        {"id": 3, "name": "Республика Бурятия"},
        {"id": 4, "name": "Республика Саха (Якутия)"},
        {"id": 5, "name": "Амурская область"},
        {"id": 6, "name": "Камчатский край"},
        {"id": 7, "name": "Еврейская автономная область"},
        {"id": 8, "name": "Магаданская область"},
        {"id": 9, "name": "Чукотский автономный округ"}
      ]
    },
    {
      "id": 2,
      "name": "Северо-Кавказский федеральный округ",
      "abbreviation": "СКФО",
      "subjects": [
        {"id": 10, "name": "Республика Дагестан"},
        {"id": 11, "name": "Кабардино-Балкарская Республика"}
      ]
    },
    {
      "id": 3,
      "name": "Северо-Западный федеральный округ",
      "abbreviation": "СЗФО",
      "subjects": [
        {"id": 12, "name": "Псковская область"},
        {"id": 13, "name": "Ненецкий автономный округ"}
      ]
    },
    {
      "id": 4,
      "name": "Сибирский федеральный округ",
      "abbreviation": "СФО",
      "subjects": [
        {"id": 14, "name": "Омская область"},
        {"id": 15, "name": "Республика Тыва"},
        {"id": 16, "name": "Республика Алтай"},
        {"id": 17, "name": "Алтайский край"},
        {"id": 18, "name": "Томская область"},
        {"id": 19, "name": "Новосибирская область"}
      ]
    },
    {
      "id": 5,
      "name": "Уральский федеральный округ",
      "abbreviation": "УФО",
      "subjects": [
        {"id": 20, "name": "Челябинская область"}
      ]
    },
    {
      "id": 6,
      "name": "Центральный федеральный округ",
      "abbreviation": "ЦФО",
      "subjects": [
        {"id": 21, "name": "Ивановская область"},
        {"id": 22, "name": "Белгородская область"}
      ]
    },
    {
      "id": 7,
      "name": "Южный федеральный округ",
      "abbreviation": "ЮФО",
      "subjects": [
        {"id": 23, "name": "Астраханская область"}
      ]
    }
  ]

export const roadmap = {
    "summary": {
      "total_roadmaps": 86,
      "status": "УТВЕРЖДЕНО",
      "period": "декабрь 2024 – июль 2025",
      "red_zone_count": 10,
      "yellow_zone_count": 56,
      "partially_completed": "1 регионов мероприятия ДК исполнили частично",
      "partially_completed_regions": [
        "Иркутская область",
        "Тверская область", 
        "Самарская область",
        "Магаданская область",
        "Республика Коми",
        "Калининградская область",
        "Ненецкий АО",
        "Чукотский АО",
        "Республика Крым",
        "Алтайский край"
      ]
    },
    "red_zone": [
      {
        "id": 1,
        "region": "Иркутская область",
        "events_count": 20,
        "new_events_july_2025": 3,
        "delay_days": 231
      },
      {
        "id": 2,
        "region": "Калужская область",
        "events_count": 10,
        "new_events_july_2025": 0,
        "delay_days": 172
      },
      {
        "id": 3,
        "region": "Республика Ингушетия",
        "events_count": 5,
        "new_events_july_2025": 0,
        "delay_days": 172
      },
      {
        "id": 4,
        "region": "Новосибирская область",
        "events_count": 30,
        "new_events_july_2025": 6,
        "delay_days": 141
      },
      {
        "id": 5,
        "region": "Республика Саха (Якутия)",
        "events_count": 4,
        "new_events_july_2025": 0,
        "delay_days": 141
      },
      {
        "id": 6,
        "region": "Приморский край",
        "events_count": 41,
        "new_events_july_2025": 1,
        "delay_days": 111
      },
      {
        "id": 7,
        "region": "Свердловская область",
        "events_count": 30,
        "new_events_july_2025": 8,
        "delay_days": 111
      },
      {
        "id": 8,
        "region": "Орловская область",
        "events_count": 6,
        "new_events_july_2025": 0,
        "delay_days": 111
      },
      {
        "id": 9,
        "region": "Амурская область",
        "events_count": 4,
        "new_events_july_2025": 0,
        "delay_days": 50
      },
      {
        "id": 10,
        "region": "г. Севастополь",
        "events_count": 4,
        "new_events_july_2025": 2,
        "delay_days": 80
      }
    ],
    "yellow_zone": [
      {
        "id": 1,
        "region": "Сахалинская область",
        "events_count": 45,
        "new_events_july_2025": 7,
        "delay_days": 200
      },
      {
        "id": 2,
        "region": "Алтайский край",
        "events_count": 1,
        "new_events_july_2025": 0,
        "delay_days": 172
      },
      {
        "id": 3,
        "region": "Костромская область",
        "events_count": 8,
        "new_events_july_2025": 0,
        "delay_days": 172
      },
      {
        "id": 4,
        "region": "Архангельская область",
        "events_count": 37,
        "new_events_july_2025": 4,
        "delay_days": 172
      },
      {
        "id": 5,
        "region": "Республика Северная Осетия-Алания",
        "events_count": 3,
        "new_events_july_2025": 0,
        "delay_days": 172
      },
      {
        "id": 6,
        "region": "ЯНАО",
        "events_count": 9,
        "new_events_july_2025": 0,
        "delay_days": 172
      },
      {
        "id": 7,
        "region": "Республика Коми",
        "events_count": 26,
        "new_events_july_2025": 3,
        "delay_days": 172
      },
      {
        "id": 8,
        "region": "Тамбовская область",
        "events_count": 19,
        "new_events_july_2025": 0,
        "delay_days": 141
      },
      {
        "id": 9,
        "region": "Кировская область",
        "events_count": 17,
        "new_events_july_2025": 2,
        "delay_days": 141
      },
      {
        "id": 10,
        "region": "Ульяновская область",
        "events_count": 7,
        "new_events_july_2025": 1,
        "delay_days": 141
      },
      {
        "id": 11,
        "region": "Республика Тыва",
        "events_count": 25,
        "new_events_july_2025": 4,
        "delay_days": 141
      },
      {
        "id": 12,
        "region": "Магаданская область",
        "events_count": 4,
        "new_events_july_2025": 0,
        "delay_days": 141
      },
      {
        "id": 13,
        "region": "ХМАО",
        "events_count": 7,
        "new_events_july_2025": 2,
        "delay_days": 141
      },
      {
        "id": 14,
        "region": "Ленинградская область",
        "events_count": 2,
        "new_events_july_2025": 0,
        "delay_days": 141
      },
      {
        "id": 15,
        "region": "Краснодарский край",
        "events_count": 24,
        "new_events_july_2025": 3,
        "delay_days": 141
      },
      {
        "id": 16,
        "region": "Курская область",
        "events_count": 4,
        "new_events_july_2025": 1,
        "delay_days": 141
      },
      {
        "id": 17,
        "region": "Хабаровский край",
        "events_count": 6,
        "new_events_july_2025": 0,
        "delay_days": 141
      },
      {
        "id": 18,
        "region": "Республика Алтай",
        "events_count": 13,
        "new_events_july_2025": 5,
        "delay_days": 141
      },
      {
        "id": 19,
        "region": "г. Санкт-Петербург",
        "events_count": 4,
        "new_events_july_2025": 0,
        "delay_days": 141
      },
      {
        "id": 20,
        "region": "КБР",
        "events_count": 2,
        "new_events_july_2025": 1,
        "delay_days": 111
      },
      {
        "id": 21,
        "region": "Чукотский АО",
        "events_count": 10,
        "new_events_july_2025": 4,
        "delay_days": 111
      },
      {
        "id": 22,
        "region": "Калининградская область",
        "events_count": 20,
        "new_events_july_2025": 7,
        "delay_days": 111
      },
      {
        "id": 23,
        "region": "Рязанская область",
        "events_count": 14,
        "new_events_july_2025": 6,
        "delay_days": 111
      },
      {
        "id": 24,
        "region": "Камчатский край",
        "events_count": 5,
        "new_events_july_2025": 1,
        "delay_days": 111
      },
      {
        "id": 25,
        "region": "Челябинская область",
        "events_count": 18,
        "new_events_july_2025": 3,
        "delay_days": 80
      },
      {
        "id": 26,
        "region": "Вологодская область",
        "events_count": 4,
        "new_events_july_2025": 1,
        "delay_days": 111
      },
      {
        "id": 27,
        "region": "НАО",
        "events_count": 5,
        "new_events_july_2025": 1,
        "delay_days": 111
      },
      {
        "id": 28,
        "region": "Республика Башкортостан",
        "events_count": 33,
        "new_events_july_2025": 3,
        "delay_days": 262
      },
      {
        "id": 29,
        "region": "Республика Крым",
        "events_count": 5,
        "new_events_july_2025": 4,
        "delay_days": 50
      },
      {
        "id": 30,
        "region": "Омская область",
        "events_count": 12,
        "new_events_july_2025": 0,
        "delay_days": 111
      },
      {
        "id": 31,
        "region": "Кемеровская область-Кузбасс",
        "events_count": 3,
        "new_events_july_2025": 0,
        "delay_days": 80
      },
      {
        "id": 32,
        "region": "Оренбургская область",
        "events_count": 5,
        "new_events_july_2025": 1,
        "delay_days": 80
      },
      {
        "id": 33,
        "region": "Пермский край",
        "events_count": 1,
        "new_events_july_2025": 0,
        "delay_days": 80
      },
      {
        "id": 34,
        "region": "Самарская область",
        "events_count": 9,
        "new_events_july_2025": 4,
        "delay_days": 80
      },
      {
        "id": 35,
        "region": "Смоленская область",
        "events_count": 2,
        "new_events_july_2025": 1,
        "delay_days": 80
      },
      {
        "id": 36,
        "region": "КЧР",
        "events_count": 14,
        "new_events_july_2025": 7,
        "delay_days": 80
      },
      {
        "id": 37,
        "region": "Тверская область",
        "events_count": 4,
        "new_events_july_2025": 0,
        "delay_days": 80
      },
      {
        "id": 38,
        "region": "Владимирская область",
        "events_count": 1,
        "new_events_july_2025": 0,
        "delay_days": 80
      },
      {
        "id": 39,
        "region": "Тюменская область",
        "events_count": 3,
        "new_events_july_2025": 0,
        "delay_days": 80
      },
      {
        "id": 40,
        "region": "Красноярский край",
        "events_count": 21,
        "new_events_july_2025": 15,
        "delay_days": 50
      },
      {
        "id": 41,
        "region": "ЛНР",
        "events_count": 4,
        "new_events_july_2025": 2,
        "delay_days": 50
      },
      {
        "id": 42,
        "region": "Липецкая область",
        "events_count": 2,
        "new_events_july_2025": 0,
        "delay_days": 50
      },
      {
        "id": 43,
        "region": "Брянская область",
        "events_count": 9,
        "new_events_july_2025": 7,
        "delay_days": 50
      },
      {
        "id": 44,
        "region": "Республика Хакасия",
        "events_count": 1,
        "new_events_july_2025": 0,
        "delay_days": 50
      },
      {
        "id": 45,
        "region": "Саратовская область",
        "events_count": 1,
        "new_events_july_2025": 0,
        "delay_days": 50
      },
      {
        "id": 46,
        "region": "Нижегородская область",
        "events_count": 3,
        "new_events_july_2025": 2,
        "delay_days": 50
      },
      {
        "id": 47,
        "region": "Республика Дагестан",
        "events_count": 2,
        "new_events_july_2025": 0,
        "delay_days": 50
      },
      {
        "id": 48,
        "region": "Республика Бурятия",
        "events_count": 1,
        "new_events_july_2025": 0,
        "delay_days": 50
      },
      {
        "id": 49,
        "region": "Ярославская область",
        "events_count": 2,
        "new_events_july_2025": 2,
        "delay_days": 19
      },
      {
        "id": 50,
        "region": "ЕАО",
        "events_count": 2,
        "new_events_july_2025": 2,
        "delay_days": 19
      },
      {
        "id": 51,
        "region": "Республика Мордовия",
        "events_count": 11,
        "new_events_july_2025": 11,
        "delay_days": 19
      },
      {
        "id": 52,
        "region": "Республика Карелия",
        "events_count": 6,
        "new_events_july_2025": 6,
        "delay_days": 19
      },
      {
        "id": 53,
        "region": "Новгородская область",
        "events_count": 1,
        "new_events_july_2025": 1,
        "delay_days": 19
      },
      {
        "id": 54,
        "region": "Ростовская область",
        "events_count": 4,
        "new_events_july_2025": 4,
        "delay_days": 19
      },
      {
        "id": 55,
        "region": "Волгоградская область",
        "events_count": 1,
        "new_events_july_2025": 1,
        "delay_days": 19
      },
      {
        "id": 56,
        "region": "Чувашская Республика",
        "events_count": 2,
        "new_events_july_2025": 2,
        "delay_days": 19
      }
    ]
  }

import envir_violations from '../images/envir_violations.png'
import garbage_collection from '../images/garbage_collection.png'
import garbage_sites from '../images/garbage_sites.png'

export const appealsData = [
    {
        "id": 1,
        "title": "Мусорные площадки и контейнеры",
        "percentage": "37%",
        "regions": [
            "Республика Карелия",
            "Ленинградская область",
            "Тамбовская область",
            "Калининградская область",
            "Севастополь"
        ],
        "image" : garbage_sites
    },
    {
        "id": 1,
        "title": "Экологические нарушения",
        "percentage": "20%",
        "regions": [
            "Кабардино-Балкарская Республика",
            "Тамбовская область",
            "Магаданская область",
            "Приморский край",
            "Республика Алтай"
        ],
        "image" : envir_violations
    },
    {
        "id": 3,
        "title": "Сбор и уборка мусора",
        "subtitle": "вне контейнерных площадок",
        "percentage": "13%",
        "regions": [
            "Новосибирская область",
            "Калужская область",
            "Тульская область",
            "Ростовская область",
            "Санкт-Петербург"
        ],
        "image" : garbage_collection
    }
]

export const tableData = [
    { 
        id: 1, 
        subject: "Астраханская область", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "20,13", 
        photo2: "19,90" 
    },
    { 
        id: 2, 
        subject: "Владимирская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "26,74", 
        photo2: "34,12" 
    },
    { 
        id: 3, 
        subject: "Воронежская область", 
        status: "предоставили", 
        overdue: "нет", 
        note: "", 
        photo1: "4,09", 
        photo2: "13,1" 
    },
    { 
        id: 4, 
        subject: "Еврейская АО", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "10,22", 
        photo2: "18,74" 
    },
    { 
        id: 5, 
        subject: "Забайкальский край", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "20,59", 
        photo2: "17,32" 
    },
    { 
        id: 6, 
        subject: "Иркутская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "19,8", 
        photo2: "16,14" 
    },
    { 
        id: 7, 
        subject: "Кемеровская область - Кузбасс", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "3,23", 
        photo2: "29,31" 
    },
    { 
        id: 8, 
        subject: "Костромская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "9,6", 
        photo2: "32,06" 
    },
    { 
        id: 9, 
        subject: "Липецкая область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "20,9", 
        photo2: "29,67" 
    },
    { 
        id: 10, 
        subject: "Новгородская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "19,57", 
        photo2: "21,04" 
    },
    { 
        id: 11, 
        subject: "Пензенская область", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "14,86", 
        photo2: "9,15" 
    },
    { 
        id: 12, 
        subject: "Псковская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "21,98", 
        photo2: "15,92" 
    },
    { 
        id: 13, 
        subject: "Республика Алтай", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "7,75", 
        photo2: "4,97" 
    },
    { 
        id: 14, 
        subject: "Республика Бурятия", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "6,46", 
        photo2: "27,35" 
    },
    { 
        id: 15, 
        subject: "Республика Крым", 
        status: "предоставлен", 
        overdue: "да", 
        note: "На 18.08. не выполнен показатель.",
        photo1: "18,99", 
        photo2: "19,19" 
    },
    { 
        id: 16, 
        subject: "Республика Мордовия", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "13,69", 
        photo2: "17,66" 
    },
    { 
        id: 17, 
        subject: "Республика Татарстан", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "23,32", 
        photo2: "39,5" 
    },
    { 
        id: 18, 
        subject: "Свердловская область", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "10,78", 
        photo2: "23,28" 
    },
    { 
        id: 19, 
        subject: "Тверская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "18,66", 
        photo2: "17,91" 
    },
    { 
        id: 20, 
        subject: "Томская область", 
        status: "не предоставлен", 
        overdue: "", 
        note: "", 
        photo1: "6,6", 
        photo2: "6,72" 
    },
    { 
        id: 21, 
        subject: "Ульяновская область", 
        status: "предоставлен", 
        overdue: "да", 
        note: "На 18.08. не выполнен показатель.",
        photo1: "2,07", 
        photo2: "23,34" 
    },
    { 
        id: 22, 
        subject: "Чукотский автономный округ", 
        status: "предоставлен", 
        overdue: "да", 
        note: "На 18.08. не выполнен показатель.", 
        photo1: "6,82", 
        photo2: "19,84" 
    },
    { 
        id: 23, 
        subject: "Ямало-Ненецкий АО", 
        status: "предоставлен", 
        overdue: "да", 
        note: "Этап 1 не выполнен", 
        photo1: "23,07", 
        photo2: "11,31" 
    },
    { 
        id: 24, 
        subject: "Ярославская область", 
        status: "предоставлен", 
        overdue: "нет", 
        note: "", 
        photo1: "29,86", 
        photo2: "43,15" }
]


export const blockContent = [
    {
      "section_title": "Устойчивость региональных операторов",
      "roadmap_status": "Дорожная карта не требуется",
      "operator_name": "ПТ КО \"ЕСОО\"",
      "coverage": "все территории Калининградской области",
      "ownership_type": "региональная"
    },
    {
      "section_title": "Обеспеченность спецтехникой",
      "roadmap_status": "Дорожная карта не требуется/утверждена XX.XX . XXXX",
      "metrics": {
        "plan": "XXX ед.",
        "fact": "XXX ед.", 
        "deficit": "XXX ед. (XXX %)",
        "purchased_2025": "XXX ед. из XXX ед. (XXX %)"
      }
    },
    [{
      "section_title": "Обеспеченность контейнерными площадками", 
      "roadmap_status": "Дорожная карта утверждена XX.XX . XXXX",
      "metrics": {
        "plan": "XXX ед.",
        "fact": "XXX ед.",
        "deficit": "XXX ед. (XXX %)",
        "purchased_2025": "XXX ед. из XXX ед. (XXX %)"
      }
    },
    {
      "section_title": "Обеспеченность контейнерами",
      "roadmap_status": "Дорожная карта утверждена XX.XX.XXXX", 
      "metrics": {
        "plan": "XXX ед.",
        "fact": "XXX ед.",
        "deficit": "XXX ед. (XXX %)",
        "purchased_2025": "XXX ед. из XXX ед. (XXX %)"
      }
    }]
]