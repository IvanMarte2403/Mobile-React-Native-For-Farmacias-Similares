import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileStyles from './style/ProfileStyle';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faStar, faGlobe, faCube } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../AuthContext'; // Importa el hook useAuth

//Services 

import {getUserTrophies} from '../../services/StadisticsCollectionDatabase';
import {trophyImages} from './imageMapping';


const ProfileScreen = () => {

  const { scoreTotal } = useAuth();


  // Usar Las Variables de Contexto
  const { uid,displayName } = useAuth();

  // Añadir estado para controlar la vista seleccionada
  const [trophies, setTrophies] = useState<string[]>([]);
  const [selectedView, setSelectedView] = useState('insignias'); // 'insignias' o 'estadisticas'


  // Efecto para cargar los trofeos del usuario al montar el componente
  useEffect(() => {
    const fetchTrophies = async () => {
      if (uid) {
        const userTrophies = await getUserTrophies(uid);
        setTrophies(userTrophies); // Guardar los trofeos en el estado
      }
    };

    fetchTrophies();
  }, [uid]);

    // Función para dividir los trofeos en filas de 3
    const getRowsOfTrophies = () => {
      const rows = [];
      for (let i = 0; i < trophies.length; i += 3) {
        rows.push(trophies.slice(i, i + 3));
      }
      return rows;
    };




  return (

      <ScrollView style={ProfileStyles.containerMax} contentContainerStyle={ProfileStyles.container}>
  
      {/* Header Profile */}
      <View style={ProfileStyles.headerProfile}>
        <Image
          source={require('../../../img/iconos/config.png')}
        />
      </View>
      
      {/* Foto de Perfil  */}
      <View style={ProfileStyles.profileImageContainer}>
        <Image
          resizeMode='contain'
          style ={ProfileStyles.imageProfile}
          source={require('../../../img/profile/victorGonzales.png')}
        />
      </View>

      {/* View Dashboard */}
      <View style={ProfileStyles.containerDashboard}>
        <Text style={ProfileStyles.TextProfile}>{displayName || 'Usuario'}</Text>

        {/* Puntuacion Global */}
        <View style={ProfileStyles.ContainerPuntaje}>
          {/* Puntos */}
          <View style={ProfileStyles.puntajeBox}>
            {/* Icono */}
            <View style={ProfileStyles.containerIcono}>
            <FontAwesomeIcon icon={faStar} size={20} color="#fff" />
            </View>
            {/* Title */}
            <Text style={ProfileStyles.titlePuntaje}>
              Puntos
            </Text>
            {/* Puntos */}
            <Text style={ProfileStyles.puntajeNumber}>
              {scoreTotal}
            </Text>
          </View>    
          
          {/* Top Mundial */}
          <View style={ProfileStyles.puntajeBox}>
            {/* Icono */}
            <View style={ProfileStyles.containerIcono}>
            <FontAwesomeIcon icon={faGlobe} size={20} color="#fff" />
            </View>
            {/* Title */}
            <Text style={ProfileStyles.titlePuntaje}>
              Top Mundial
            </Text>
            {/* Puntos */}
            <Text style={ProfileStyles.puntajeNumber}>
              #1,438
            </Text>
          </View>  

          {/* Top Local */}
          <View style={ProfileStyles.puntajeBox2}>
            {/* Icono */}
            <View style={ProfileStyles.containerIcono}>
            <FontAwesomeIcon icon={faCube} size={20} color="#fff" />
            </View>
            {/* Title */}
            <Text style={ProfileStyles.titlePuntaje}>
              Top Local
            </Text>
            {/* Puntos */}
            <Text style={ProfileStyles.puntajeNumber}>
              #56
            </Text>
          </View>  
        </View>
        
        {/* Insignias  */}

        <View style={ProfileStyles.containerPuntaje}>
          {/* NavBar */}
          <View style={ProfileStyles.containerNavBar}>
            {/* Botones para cambiar la vista */}
            <TouchableOpacity onPress={() => setSelectedView('insignias')}>
              <Text>Insignias</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedView('estadisticas')}>
              <Text>Estadísticas</Text>
            </TouchableOpacity>
            <Text>Detalles</Text>
          </View>

          {/* Insignias */}

          {/* Mostrar contenedores basados en la vista seleccionada */}
          {selectedView === 'insignias' ? (
            <View style={ProfileStyles.containerInsignias}>
              {getRowsOfTrophies().map((row, rowIndex) => (
                <View key={rowIndex} style={ProfileStyles.rowInsignias}>
                  {row.map((trophy, index) => (
                    <View key={index} style={ProfileStyles.containerImage}>
                      {trophyImages[trophy] && (
                        <Image
                          source={trophyImages[trophy]} // Usar el mapa de imágenes
                          resizeMode="contain"
                          style={ProfileStyles.medalStyle}
                        />
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ) : (
            <View style={ProfileStyles.containerEstadistics}>
              <Text style={ProfileStyles.titleTotalGames}>
                HAZ JUGADO UN TOTAL DE 6 JUEGOS EN EL MES
              </Text>

              <View style={ProfileStyles.rowStadistics}> 
                {/* Box */}
                <View style={ProfileStyles.containerBoxStadistics}>
                    <View style={ProfileStyles.containerUpNumber}>
                        <Text style={ProfileStyles.titleNumber}>
                          5
                        </Text>
                        <Image 
                          source={require('../../../img/iconos/pastilla.png')} resizeMode="contain"
                        />
                    </View>

                    <View>
                      <Text style={ProfileStyles.textBox}>Mejor Juego</Text>
                    </View>
                </View>

                {/* Box                 */}
                <View style={ProfileStyles.containerBoxStadistics}>
                    <View style={ProfileStyles.containerUpNumber}>
                        <Text style={ProfileStyles.titleNumber}>
                          21
                        </Text>
                     
                    </View>

                    <View>
                      <Text style={ProfileStyles.textBox}>Mejor Partida</Text>
                    </View>
                </View>  
              
              </View>

            </View>
          )}
        </View>

        
        
      </View>

      {/* Stadistics */}


    </ScrollView>
  );
};

const styles = StyleSheet.create({


});

export default ProfileScreen;
