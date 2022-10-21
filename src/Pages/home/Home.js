import { HStack, VStack,Text, Wrap, WrapItem,Image,Box, Center} from '@chakra-ui/react';
import {MdAddShoppingCart} from 'react-icons/md'
import './home.css'
import React, { useState } from 'react';
import LeftNav from '../../components/LeftNav';
import Cart from '../../components/Cart';

const Home = () => {


    const [products,setProducts]=useState([
        {
            id:"1",
            nom:"Sac Vagabon",
            prix:"120",
            img:"https://www.eschuhe.ch/fr/media/catalog/product/cache/image/650x650/7/3/7320562438992_01_dd.jpg"
        },
        {
            id:"2",
            nom:"Ceinture Whitney",
            prix:"35",
            img:"https://www.cdiscount.com/pdt2/8/3/2/1/300x300/auc2009890450832/rw/ceinture-homme-en-cuir-veritable-avec-boucle-autom.jpg"
        },
        {
            id:"3",
            nom:"Boucles d'oreilles Strut",
            prix:"34",
            img:"https://www.j-mohedano.com/wp-content/uploads/2021/06/20210612_144726-350x350.jpg"
        },
        {
            id:"4",
            nom:"Chaussettes de sport",
            prix:"12",
            img:"https://www.labonal.fr/19256-large_default/chaussettes-sport-bouclette-coton-noir.jpg"
        },
        {
            id:"5",
            nom:"Casquette Gatsby",
            prix:"40",
            img:"https://img.hutshopping.ch/Casquette-Shetland-Gatsby-by-Lierys.57245_pf2.jpg"
        },
        {
            id:"6",
            nom:"Lunettes de soleil stella",
            prix:"58",
            img:"https://i.ebayimg.com/images/g/kA8AAOSw8fldSYvT/s-l640.jpg"
        },
        {
            id:"7",
            nom:"collier",
            prix:"98",
            img:"https://joliedemoiselle.fr/8937-large_default/collier-liya-plaque-or-chaine-boules-medaillon-rond.jpg"
        },
        {
            id:"8",
            nom:"Porte-cle Tresse",
            prix:"16",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FhEFyqtxAacWU9J-Jxb1U9HqMqiE6VvwgtfFKCjCgTjzSuLaaaIQWTlne6ZXLZRu-lo&usqp=CAU"
        },
        {
            id:"9",
            nom:"Sac a main",
            prix:"198",
            img:"https://static.galerieslafayette.com/media/768/76876989/G_76876989_320_360x393_2.jpg"
        }

    ])
    const [cart,setCart]=useState([])
    let i=0;

    const addTocart=(prod)=>{
        const c=cart
        c.push(prod)
        setCart(c)
        console.log(cart)
    }   

    return (
       <HStack spacing="0px">
           
           <LeftNav />


            <VStack boxShadow="-5px 0px 12px -6px rgba(0,0,0,0.63);" w="90%"  h="100vh"  alignItems="center"  >
                <Wrap  w="90%"  justifyContent="center" alignItems="center" h="100%" overflowX="hidden" overflowY="scroll" className='wraps' paddingTop="50px" paddingBottom="50px">
                    
                    {
                    
                        products.map((prod,j)=>{
                            
                            i=i+1
                            return(<WrapItem key={i} onClick={()=>{addTocart(prod)}} paddingTop={i%2 ? "":"100px"} paddingBottom={i%2 ? "60px":""} >
                                <VStack marginLeft="10px" marginRight="10px" >
                                <Box w="150px" h="130px" padding="20px" bgImage={prod.img} bgPosition="center" bgSize="cover" bgRepeat="no-repeat">
                                        <MdAddShoppingCart fontSize="20px" />
                                    </Box> 
                                    <Text >{prod.nom}</Text>
                                    <Text>{prod.prix}$</Text>
                                </VStack>
                            </WrapItem>);
                        })
                    }
                                
                </Wrap>
            </VStack>

            <Cart cart={cart} />
            
       </HStack>
    );
};

export default Home;