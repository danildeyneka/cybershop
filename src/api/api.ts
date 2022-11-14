import axios from 'axios'
import {DatabaseType} from '../@types/types'

export const instance = axios.create({
    baseURL: 'https://midi-polydactyl-rainbow.glitch.me/'
})

const db = [
    {
        name: 'admin',
        password: 'admin'
    }
]

// const db: DatabaseType[] = [
//     {
//         id: 1,
//         category: 'mouse',
//         brand: 'Logitech',
//         name: '502 HERO',
//         oldPrice: null,
//         price: 5999,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/1a17bf39f7e1c6cd33ed6476f411d925/0991ca8c863afd7dd77f0e8f50fd6739c94a3bb8c6d9683def7c60d98507cd03.jpg.webp',
//         desc: '25600 dpi, светодиодный, USB Type-A, кнопки - 11'
//     },
//     {
//         id: 2,
//         category: 'mouse',
//         brand: 'Logitech',
//         name: 'G PRO X SUPERLIGHT',
//         oldPrice: 13999,
//         price: 12999,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/d7aa27ae6cf06d51a7d3661900e526fa/f83717ae202b0646bd41f810f464bbe14e0bba68837c12f98c8303faee611abc.jpg.webp',
//         desc: '25600 dpi, светодиодный, USB Type-A, кнопки - 5'
//     },
//     {
//         id: 3,
//         category: 'mouse',
//         brand: 'Logitech',
//         name: 'G102 LIGHTSYNC',
//         oldPrice: 3999,
//         price: 3299,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7814b8f7c2cd31c2387493f568f16e6b/a131f53a2c5644d07b7d535eb3a2743917b33abbafd1ee834f00442d4003bc90.jpg.webp',
//         desc: '8000 dpi, светодиодный, USB Type-A, кнопки - 6'
//     },
//     {
//         id: 4,
//         category: 'mouse',
//         brand: 'Razer',
//         name: 'DeathAdder Essential',
//         oldPrice: null,
//         price: 1599,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/6c3b0e4aac4b693551cdb62793b9fe87/c30b03a0c8cd3cf543791ad366f202e92f9149afbbaeb65f7d655d8e22feedba.jpg.webp',
//         desc: '6400 dpi, светодиодный, USB Type-A, кнопки - 5'
//     },
//     {
//         id: 5,
//         category: 'mouse',
//         brand: 'Razer',
//         name: 'Viper Ultimate',
//         oldPrice: 12999,
//         price: 9999,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/6540ce3804c3a18c504d1fa1f11becbf/15d5a69ac13f7b85bde2c5daf3d6e622e675e591bac0751f92d42f38903b967a.jpg.webp',
//         desc: '20000 dpi, светодиодный, USB Type-A, кнопки - 8'
//     },
//     {
//         id: 6,
//         category: 'mouse',
//         brand: 'SteelSeries',
//         name: 'Rival 3',
//         oldPrice: 4499,
//         price: 3199,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/a361ac8127b3c30e65e2266b0d815add/33ecd343d2de125fcc09b0e4c7585e5acdeef2114224d3eb80ab982e981d91c3.jpg.webp',
//         desc: '8500 dpi, светодиодный, USB Type-A, кнопки - 6'
//     },
//     {
//         id: 7,
//         category: 'keyboard',
//         brand: 'ZET GAMING',
//         name: 'Blade',
//         oldPrice: 5999,
//         price: 4799,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/9acf4c8615eb0a81317f85fbac0089ae/f4d93212c126d761982ee5fb09aa040cf155dafd2f4eaecde712984398336e00.jpg.webp',
//         desc: 'механическая Kailh Red, клавиш - 104, USB, черная'
//     },
//     {
//         id: 8,
//         category: 'keyboard',
//         brand: 'Logitech',
//         name: 'G413 TKL SE',
//         oldPrice: null,
//         price: 5999,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/6871679e8e8e1f855ab528a1b5e5044a/4e25900e5985e94d08256012d81294ec6262f303a8f163524f008eae04015a91.jpg.webp',
//         desc: 'механическая Kailh Brown, клавиш - 87, USB, черная'
//     },
//     {
//         id: 9,
//         category: 'keyboard',
//         brand: 'ZET GAMING',
//         name: 'Immortality TKL',
//         oldPrice: null,
//         price: 5199,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/2f75c05caa27db145ae0593cde12c10e/e5fff5e7aa7187fb0e4b875c1ff10e48ca8e4cc46ae698773779a4b4491d492c.jpg.webp',
//         desc: 'механическая Kailh Box Red, клавиш - 87, USB, белая'
//     },
//     {
//         id: 10,
//         category: 'keyboard',
//         brand: 'Razer',
//         name: 'BlackWidow V3',
//         oldPrice: 11999,
//         price: 8999,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/11899c3e0989db6f260a2b4ea5b375cf/53476acdb5d3e5392755e3cef093f5aeb7cfac15fd9666d99f84e1b3e3707127.jpg.webp',
//         desc: 'механическая Razer Yellow, клавиш - 105, USB, черная'
//     },
//     {
//         id: 11,
//         category: 'keyboard',
//         brand: 'HyperX',
//         name: 'Alloy Origins',
//         oldPrice: null,
//         price: 9999,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/787041cc83a92d57736cfae192a1dea1/ff6722194b0ba07d41cee07941a608e0b357eb51426cf39d496696329748a772.jpg.webp',
//         desc: 'механическая HyperX Red, клавиш - 104, USB, черная'
//     },
//     {
//         id: 12,
//         category: 'keyboard',
//         brand: 'Logitech',
//         name: 'G Pro',
//         oldPrice: 14999,
//         price: 12499,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/5db9e5c673746a5c0d730213468c546f/42df11423c5e942c03018e4aaa574cba99b0094979b0b5d4b52dc8df9e862047.jpg.webp',
//         desc: 'механическая Logitech GX Blue, клавиш - 89, USB, черная'
//     },
//     {
//         id: 13,
//         category: 'keyboard',
//         brand: 'Razer',
//         name: 'Ornata V2',
//         oldPrice: null,
//         price: 5499,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/5b2f8f8f9384afabcb6ba33db4c5be53/20c7f680fa3e38f4012e6e863dc5d24a1566d4a9143ec09cbcc5b2ab435f123c.jpg.webp',
//         desc: 'плунжерная, клавиш - 107, USB, черная'
//     },
//     {
//         id: 14,
//         category: 'headphones',
//         brand: 'Logitech',
//         name: 'G PRO X',
//         oldPrice: 13499,
//         price: 11499,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a69268ed073dccda2e9a1cf753488300/b84cae9ea1f8af00d1415999c670e592432892e706c414debbadc81178b5e8a6.jpg.webp',
//         desc: '7.1 Virtual, охватывающие, 20 Гц - 20000 Гц, 35Ω, проводной, кабель - 2 м'
//     },
//     {
//         id: 15,
//         category: 'headphones',
//         brand: 'Logitech',
//         name: 'G PRO X Wireless',
//         oldPrice: null,
//         price: 16799,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/59d408fc27cdafe130991e1418ad0c65/cf2e4b6a0cd4df65a34925288cfe3dab6d9d4506b4c377de29756b54b7d5633f.jpg.webp',
//         desc: '7.1 Virtual, охватывающие, 20 Гц - 20000 Гц, 32Ω, радиоканал'
//     },
//     {
//         id: 16,
//         category: 'headphones',
//         brand: 'Razer',
//         name: 'Blackshark V2 X',
//         oldPrice: 6999,
//         price: 5499,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/f21a4c05a33f48058109c52172fdcf72/339696cf6a090421c075aece2ca258c2db94986960201060171cdfc031bf8fe3.jpg.webp',
//         desc: '7.1 Virtual, охватывающие, 12 Гц - 28000 Гц, 32Ω, проводной, кабель - 1.3 м'
//     },
//     {
//         id: 17,
//         category: 'headphones',
//         brand: 'HyperX',
//         name: 'Cloud Alpha S',
//         oldPrice: null,
//         price: 8999,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/21ed91fb0a95907f914796c045fe2ad0/179653d66501d87cf9efc86222cfd4984f50baadaa48346829b35dc7fb25c5cc.jpg.webp',
//         desc: '7.1 Virtual, охватывающие, 13 Гц - 27000 Гц, 65Ω, проводной, кабель - 2 м'
//     },
//     {
//         id: 18,
//         category: 'headphones',
//         brand: 'HyperX',
//         name: 'Cloud Stinger Core',
//         oldPrice: 4999,
//         price: 3299,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/cb79b42d144968c33909af26daab4a14/d9f523d3e25e05332e885a4fe72a9c902561f5536e0306862d59733650092e47.jpg.webp',
//         desc: '2.0, охватывающие, 20 Гц - 20000 Гц, 16Ω, проводной, кабель - 1.3 м'
//     },
//     {
//         id: 19,
//         category: 'headphones',
//         brand: 'HyperX',
//         name: 'Cloud Alpha',
//         oldPrice: null,
//         price: 7999,
//         photo: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/126655e94989a2965496825dc1d95573/2d6d5887c119a5032819ec80b572965c06ea4e98ab0c09e01c285cee47b7855c.jpg.webp',
//         desc: '2.0, охватывающие, 13 Гц - 27000 Гц, 65Ω, проводной, кабель - 1.3 м'
//     },
//     {
//         id: 20,
//         category: 'headphones',
//         brand: 'HyperX',
//         name: 'Cloud II Wireless',
//         oldPrice: 14999,
//         price: 12999,
//         photo: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/257b435ec61264a2aab3fc182fa27a12/66999ac5dc047c2436f75509aa17fdfa93af78a7c49ea5e59cdd09e5f2bd5279.jpg.webp',
//         desc: '7.1 Virtual, охватывающие, 15 Гц - 20000 Гц, 60Ω, радиоканал'
//     }
// ]

    // [{"id":1,"category":"mouse","brand":"Logitech","name":"502 HERO","oldPrice":null,"price":5999,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/1a17bf39f7e1c6cd33ed6476f411d925/0991ca8c863afd7dd77f0e8f50fd6739c94a3bb8c6d9683def7c60d98507cd03.jpg.webp","desc":"25600 dpi, светодиодный, USB Type-A, кнопки - 11"},{"id":2,"category":"mouse","brand":"Logitech","name":"G PRO X SUPERLIGHT","oldPrice":13999,"price":12999,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/d7aa27ae6cf06d51a7d3661900e526fa/f83717ae202b0646bd41f810f464bbe14e0bba68837c12f98c8303faee611abc.jpg.webp","desc":"25600 dpi, светодиодный, USB Type-A, кнопки - 5"},{"id":3,"category":"mouse","brand":"Logitech","name":"G102 LIGHTSYNC","oldPrice":3999,"price":3299,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/7814b8f7c2cd31c2387493f568f16e6b/a131f53a2c5644d07b7d535eb3a2743917b33abbafd1ee834f00442d4003bc90.jpg.webp","desc":"8000 dpi, светодиодный, USB Type-A, кнопки - 6"},{"id":4,"category":"mouse","brand":"Razer","name":"DeathAdder Essential","oldPrice":null,"price":1599,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/6c3b0e4aac4b693551cdb62793b9fe87/c30b03a0c8cd3cf543791ad366f202e92f9149afbbaeb65f7d655d8e22feedba.jpg.webp","desc":"6400 dpi, светодиодный, USB Type-A, кнопки - 5"},{"id":5,"category":"mouse","brand":"Razer","name":"Viper Ultimate","oldPrice":12999,"price":9999,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/6540ce3804c3a18c504d1fa1f11becbf/15d5a69ac13f7b85bde2c5daf3d6e622e675e591bac0751f92d42f38903b967a.jpg.webp","desc":"20000 dpi, светодиодный, USB Type-A, кнопки - 8"},{"id":6,"category":"mouse","brand":"SteelSeries","name":"Rival 3","oldPrice":4499,"price":3199,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/a361ac8127b3c30e65e2266b0d815add/33ecd343d2de125fcc09b0e4c7585e5acdeef2114224d3eb80ab982e981d91c3.jpg.webp","desc":"8500 dpi, светодиодный, USB Type-A, кнопки - 6"},{"id":7,"category":"keyboard","brand":"ZET GAMING","name":"Blade","oldPrice":5999,"price":4799,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/9acf4c8615eb0a81317f85fbac0089ae/f4d93212c126d761982ee5fb09aa040cf155dafd2f4eaecde712984398336e00.jpg.webp","desc":"механическая Kailh Red, клавиш - 104, USB, черная"},{"id":8,"category":"keyboard","brand":"Logitech","name":"G413 TKL SE","oldPrice":null,"price":5999,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/6871679e8e8e1f855ab528a1b5e5044a/4e25900e5985e94d08256012d81294ec6262f303a8f163524f008eae04015a91.jpg.webp","desc":"механическая Kailh Brown, клавиш - 87, USB, черная"},{"id":9,"category":"keyboard","brand":"ZET GAMING","name":"Immortality TKL","oldPrice":null,"price":5199,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/2f75c05caa27db145ae0593cde12c10e/e5fff5e7aa7187fb0e4b875c1ff10e48ca8e4cc46ae698773779a4b4491d492c.jpg.webp","desc":"механическая Kailh Box Red, клавиш - 87, USB, белая"},{"id":10,"category":"keyboard","brand":"Razer","name":"BlackWidow V3","oldPrice":11999,"price":8999,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/11899c3e0989db6f260a2b4ea5b375cf/53476acdb5d3e5392755e3cef093f5aeb7cfac15fd9666d99f84e1b3e3707127.jpg.webp","desc":"механическая Razer Yellow, клавиш - 105, USB, черная"},{"id":11,"category":"keyboard","brand":"HyperX","name":"Alloy Origins","oldPrice":null,"price":9999,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/787041cc83a92d57736cfae192a1dea1/ff6722194b0ba07d41cee07941a608e0b357eb51426cf39d496696329748a772.jpg.webp","desc":"механическая HyperX Red, клавиш - 104, USB, черная"},{"id":12,"category":"keyboard","brand":"Logitech","name":"G Pro","oldPrice":14999,"price":12499,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/5db9e5c673746a5c0d730213468c546f/42df11423c5e942c03018e4aaa574cba99b0094979b0b5d4b52dc8df9e862047.jpg.webp","desc":"механическая Logitech GX Blue, клавиш - 89, USB, черная"},{"id":13,"category":"keyboard","brand":"Razer","name":"Ornata V2","oldPrice":null,"price":5499,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/5b2f8f8f9384afabcb6ba33db4c5be53/20c7f680fa3e38f4012e6e863dc5d24a1566d4a9143ec09cbcc5b2ab435f123c.jpg.webp","desc":"плунжерная, клавиш - 107, USB, черная"},{"id":14,"category":"headphones","brand":"Logitech","name":"G PRO X","oldPrice":13499,"price":11499,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/a69268ed073dccda2e9a1cf753488300/b84cae9ea1f8af00d1415999c670e592432892e706c414debbadc81178b5e8a6.jpg.webp","desc":"7.1 Virtual, охватывающие, 20 Гц - 20000 Гц, 35Ω, проводной, кабель - 2 м"},{"id":15,"category":"headphones","brand":"Logitech","name":"G PRO X Wireless","oldPrice":null,"price":16799,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/59d408fc27cdafe130991e1418ad0c65/cf2e4b6a0cd4df65a34925288cfe3dab6d9d4506b4c377de29756b54b7d5633f.jpg.webp","desc":"7.1 Virtual, охватывающие, 20 Гц - 20000 Гц, 32Ω, радиоканал"},{"id":16,"category":"headphones","brand":"Razer","name":"Blackshark V2 X","oldPrice":6999,"price":5499,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/f21a4c05a33f48058109c52172fdcf72/339696cf6a090421c075aece2ca258c2db94986960201060171cdfc031bf8fe3.jpg.webp","desc":"7.1 Virtual, охватывающие, 12 Гц - 28000 Гц, 32Ω, проводной, кабель - 1.3 м"},{"id":17,"category":"headphones","brand":"HyperX","name":"Cloud Alpha S","oldPrice":null,"price":8999,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/21ed91fb0a95907f914796c045fe2ad0/179653d66501d87cf9efc86222cfd4984f50baadaa48346829b35dc7fb25c5cc.jpg.webp","desc":"7.1 Virtual, охватывающие, 13 Гц - 27000 Гц, 65Ω, проводной, кабель - 2 м"},{"id":18,"category":"headphones","brand":"HyperX","name":"Cloud Stinger Core","oldPrice":4999,"price":3299,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/cb79b42d144968c33909af26daab4a14/d9f523d3e25e05332e885a4fe72a9c902561f5536e0306862d59733650092e47.jpg.webp","desc":"2.0, охватывающие, 20 Гц - 20000 Гц, 16Ω, проводной, кабель - 1.3 м"},{"id":19,"category":"headphones","brand":"HyperX","name":"Cloud Alpha","oldPrice":null,"price":7999,"photo":"https://c.dns-shop.ru/thumb/st1/fit/500/500/126655e94989a2965496825dc1d95573/2d6d5887c119a5032819ec80b572965c06ea4e98ab0c09e01c285cee47b7855c.jpg.webp","desc":"2.0, охватывающие, 13 Гц - 27000 Гц, 65Ω, проводной, кабель - 1.3 м"},{"id":20,"category":"headphones","brand":"HyperX","name":"Cloud II Wireless","oldPrice":14999,"price":12999,"photo":"https://c.dns-shop.ru/thumb/st4/fit/500/500/257b435ec61264a2aab3fc182fa27a12/66999ac5dc047c2436f75509aa17fdfa93af78a7c49ea5e59cdd09e5f2bd5279.jpg.webp","desc":"7.1 Virtual, охватывающие, 15 Гц - 20000 Гц, 60Ω, радиоканал"}]