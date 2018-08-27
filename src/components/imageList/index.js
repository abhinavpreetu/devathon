import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';

export default {
  name: 'ImageList',

  data: () => ({
    products: [
      {
        id: 1,
        title: 'somename1',
        src: image1,
        price: 80,
      },
      {
        id: 2,
        title: 'somename2',
        src: image2,
        price: 800,
      },
      {
        id: 3,
        title: 'somename3',
        src: image3,
        price: 56,
      },
      {
        id: 4,
        title: 'somename4',
        src: image4,
        price: 840,
      },
      {
        id: 5,
        title: 'somename5',
        src: image5,
        price: 805,
      },
      {
        id: 6,
        title: 'somename6',
        src: image6,
        price: 801,
      },
    ],
  }),
};
