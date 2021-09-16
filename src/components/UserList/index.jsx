import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UserContext from '../../Context/UsersContext';

import users from '../../data/users'

export default function UserList(props) {

    const { state, dispatch } = useContext(UserContext)
    function confirmUserDelete(user) {
        Alert.alert('Excluír Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    // function getActions(user) {
    //     <>
    //         <Button
    //             onPress={() => props.navigation.navigate('UserForm', user)}
    //             type="clear"
    //             icon={<Icon name="edit" size={25} color='orange' />}
    //         />
    //         <Button
    //             onPress={() => confirmUserDelete(user)}
    //             type="clear"
    //             icon={{ name: 'delete', color: 'red' }}
    //             uttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    //         />
    //     </>
    // }

    function getUserItem({ item: user }) {
        return (
            <View>
                <ListItem bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
                // element={getActions(user)}
                >

                    <Avatar source={{ uri: user.avatarUrl }} />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Button
                        onPress={() => props.navigation.navigate('UserForm', user)}
                        type="clear"
                        icon={<Icon name="edit" size={30} color='orange' />}
                    />
                    <Button
                        onPress={() => confirmUserDelete(user)}
                        type="clear"
                        icon={<Icon name="delete" size={30} color='red' />}
                    />
                </ListItem>
                
            </View>

)
    }
    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}