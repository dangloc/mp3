import icons from './icons';

const { MdOutlineLibraryMusic, HiOutlineChartPie, TbChartArcs, MdOutlineFeed } = icons;

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
        icons: <TbChartArcs size={25}/>
    },

    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <HiOutlineChartPie size={25}/>
    },

    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineFeed size={25}/>
    }
]