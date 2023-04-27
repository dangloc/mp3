import icons from './icons';

const { MdOutlineLibraryMusic } = icons;

export const siderbarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={25}/>
    },

    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <MdOutlineLibraryMusic size={25}/>
    },

    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineLibraryMusic size={25}/>
    },

    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineLibraryMusic size={25}/>
    }
]