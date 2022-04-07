import  React, { useState }  from "react";
import ImagesPath from "../assets/Icons/ImagesPath";
import { color } from "../helper/Common/Colors";
import { Text, Image, View, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import fonts from "../helper/Common/fonts";
import { CustomStyling } from "../helper/CustomStyle/CustomStyling";
import { useNavigation } from "@react-navigation/native";
import SideMenuModal from "./SideMenu";

const JobOfferListView = ({navigation=useNavigation()}) => {
    const jobs = [{id: 1, image: ImagesPath.demoLogoImg}, {id: 2, image: ImagesPath.clockImg}, {id: 3, image: ImagesPath.addImg}, {id: 4, name: ImagesPath.activeUserImg},
        {id: 5, image: ImagesPath.demoLogoImg}, {id: 6, image: ImagesPath.clockImg}, {id: 7, image: ImagesPath.addImg}, {id: 8, name: ImagesPath.activeUserImg}];
    const [showSideMenu, setShowSideMenu] = useState(false);
   
        React.useLayoutEffect(() => {
            navigation.setOptions({
              headerLeft: () => 
            <TouchableOpacity onPress={() => setShowSideMenu(true)}>
                <Image 
                    source={ImagesPath.sideMenuImg} 
                    style={{width: 24, height: 24, resizeMode: "contain", tintColor: color.white, marginLeft: 20}}
                />
              </TouchableOpacity>
            });
          }, [navigation]);

    return(
        <SafeAreaView style={{backgroundColor: color.mainColor, flex: 1}}>
            {/* <CustomTextField
                placeholder={"Search Job"}
                rightImagePath={ImagesPath.searchImg}
                containerStyle={{marginHorizontal: 24}}
            /> */}
            
            <View style={[CustomStyling.curveViewStyle, {padding: 0}]}>
            
                <FlatList 
                    data={jobs}
                    style={{marginVertical: 8, paddingHorizontal: 20}}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={[{flexDirection: "row"}, CustomStyling.cardStyle]} onPress={() => navigation.navigate("JobDetail")}>
                            <Image 
                                source={item.image}
                                style={{width: "30%", height: "100%", resizeMode: "contain", borderRadius: 12, borderWidth: 0, backgroundColor: color.white}}
                            />
                            <View style={{paddingHorizontal: 8, width: "70%"}}>
                                <Text style={{fontSize: 14, fontFamily: fonts.semiBold, color: color.mainColor, marginBottom: 4}}>Full Time</Text>
                                <Text  style={CustomStyling.listTitle1}>Software Developer</Text>
                                <View style={{flexDirection: 'row', alignItems: "center", marginVertical: 4}}>
                                    <Text  style={{fontSize: 14, fontFamily: fonts.medium, color: color.darkGray}}>Opayn</Text>
                                    <View style={{width: 8, height: 8, borderRadius: 4, backgroundColor: color.mainColor, marginHorizontal: 8}}></View>
                                    <Text  style={{fontSize: 14, fontFamily: fonts.medium, color: color.darkGray}}>Ludhiana, Punjab</Text>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <Text  style={{fontSize: 16, fontFamily: fonts.semiBold, color: color.subtitleBlack}}>$2500</Text>
                                    
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            {/* <View  style={{ marginTop: -140, alignItems: "flex-end", marginBottom: 50}}>
                <TouchableOpacity  onPress={() => navigation.navigate("EditProfile")} style={{ height: 52, width: 52}}>
                    <Image 
                        source={ImagesPath.addImg}
                        style={{height: 52, width: 52, tintColor: color.buttonColor}}
                    />
                </TouchableOpacity>
            </View> */}
        </View>
        {(showSideMenu) ? 
                <SideMenuModal 
                    onPressSubmit={(type, startDate, endDate) => {
                        setShowSideMenu(false);
                    }} 
                    onPressCancel={() => setShowSideMenu(false)} 
                />
                : 
                null
            }
        </SafeAreaView>
    );
};

export default JobOfferListView;