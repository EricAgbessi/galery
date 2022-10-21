import { Input, VStack,Text, HStack, FormControl, Button} from '@chakra-ui/react';
import {IoDiamondOutline} from 'react-icons/io5'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Connexion = () => {
    return (
        <VStack h="100vh" >
            <VStack w="25%" h="100vh"  justifyContent="center" spacing="25px" >
                <VStack>
                    <IoDiamondOutline fontSize="35px" color='#442B2D' />
                    <Text color="#442B2D" fontSize="30px" >SHRINE</Text>
                </VStack>
                <VStack w="100%">
                    <FormControl border="1px solid #442B2D" borderRadius="8px" color="#442B2D">
                        <Input bgColor="#ffffff" type="text" border="none" placeholder="Nom d'utilisation"   />
                    </FormControl>
                    <FormControl border="1px solid #442B2D" borderRadius="8px" color="#442B2D">
                        <Input bgColor="#ffffff"  type="password" border="none" placeholder="Mot de passe"  />
                    </FormControl>
                </VStack>     
                <HStack w="100%" justifyContent="flex-end">
                    <Button bgColor="#ffffff" color="#442B2D" >ANNULER</Button>
                    <NavLink to="/home"> <Button bgColor="#FEDBD0" color="#442B2D" w="150px" h="50px"  boxShadow="-1px 0px 13px -5px rgba(0,0,0,0.75);">SUIVANT</Button> </NavLink>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default Connexion;