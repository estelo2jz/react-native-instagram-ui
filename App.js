import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

const App = () => {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 35 }}>
      <View style={styles.header}>
        <View style={{ flex: 2, flexDirection: 'row', padding: '2%', }}>
          <View style={{ flex: 1, alignSelf: 'center' }}>
            <Image
              source={require("./assets/icons/iglogo.png")}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View style={{ height: '100%', width: '50%', flex: 3, flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                <Image
                  source={require("./assets/icons/add.png")}
                />
              </View>
              <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                <Image
                  source={require("./assets/icons/heartTop.png")}
                />
              </View>
              <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                <Image
                  source={require("./assets/icons/share.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', height: '65%' }}>

          <View style={{ flex: 1 }}>
            <FlatList
              horizontal={true}

              style={{}}
              data={[
                { name: 'John', image: require("./assets/icons/ProfilePic1.png") },
                { name: 'Lisa', image: require("./assets/icons/ProfilePic1.png") },
                { name: 'George', image: require("./assets/icons/ProfilePic3.png") },
                { name: 'Anthony', image: require("./assets/icons/ProfilePic4.png") },
                { name: 'Bot', image: require("./assets/icons/ProfilePic1.png") },
                { name: 'Bot', image: require("./assets/icons/ProfilePic2.png") },
                { name: 'Monica', image: require("./assets/icons/ProfilePic.png") },
                { name: 'John', image: require("./assets/icons/ProfilePic3.png") },
                { name: 'Estelo', image: require("./assets/icons/ProfilePic3.png") },
                { name: 'Dayen', image: require("./assets/icons/ProfilePic4.png") },

              ]}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString() + item.toString()}
              contentContainerStyle={{ paddingRight: 300 }}
              ListHeaderComponentStyle={{ justifyContent: 'center' }}
              ListHeaderComponent={() => (
                <View style={{ alignItems: 'center', padding: '2.5%', flexDirection: 'column', justifyContent: 'center' }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                    <Image
                      source={require("./assets/icons/ProfilePic.png")}
                    />
                    <Image
                      source={require("./assets/icons/AddStory.png")}
                      style={{ position: "absolute", right: 0, bottom: 0, }}
                    />
                  </View>
                  <Text style={{ fontFamily: "SF-UI-Text-Regular", fontSize: 11, paddingTop: '1.5%' }}>
                    Your Story
                      </Text>
                </View>
              )}
              renderItem={({ item, index }) => (
                <View style={{ alignItems: 'center', padding: '2.5%', flexDirection: 'column', justifyContent: 'center' }}>
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                    <Image
                      source={item.image}
                    />
                    <Image
                      source={require("./assets/icons/Gradient.png")}
                      style={{ position: "absolute", }}
                    />
                  </View>
                  <Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 11, paddingTop: '1.5%' }}>
                    {item.name}
                  </Text>
                </View>
              )}

            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <View style={{ height: 450, marginBottom: 10 }}>
          <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', padding: '7.5%' }}>
                <Image
                  source={require("./assets/icons/logo.png")}
                  style={{ borderRadius: 200 }}
                />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 12 }}>
                  Pablo Costa
                      </Text>
                <Text style={{ fontFamily: "SF-UI-Text-Regular", fontSize: 11 }}>
                  Mexico
                      </Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', padding: '2%' }}>
              <Image
                source={require("./assets/icons/3dots.png")}
              />
            </View>
          </View>
          <View style={{ height: 300, backgroundColor: 'green' }}>
            <Image
              source={require("./assets/images/image2.png")}
              style={{
                width: '100%',
                height: 300,
              }}
            />

          </View>
          <View style={{ height: 100 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ height: '40%', width: '20%', margin: '2%' }}>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/Heartbtm.png")}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/Comment.png")}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/shareLogo.png")}
                    />
                  </View>
                </View>
              </View>

              <View style={{ height: '40%', width: '20%', margin: '2%', alignItems: 'flex-end', }}>
                <Image
                  source={require("./assets/icons/Bookmark.png")}
                />
              </View>
            </View>
            <View style={{ paddingLeft: '3%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Bold", fontSize: 12, paddingBottom: '0.5%' }}>23 Likes</Text>
            </View>
            <View style={{ paddingLeft: '3%', flexDirection: 'row', paddingBottom: '0.5%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Bold", fontSize: 12 }}>pablo99 </Text><Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 12 }}>Sick Grafity</Text>
            </View>
            <View style={{ paddingLeft: '3%', paddingBottom: '0.5%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Regular", fontSize: 10, color: 'grey' }}>Add a comment...</Text>
            </View>
          </View>

        </View>


        <View style={{ height: 450, marginBottom: 10 }}>
          <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', padding: '7.5%' }}>
                <Image
                  source={require("./assets/icons/logo.png")}
                  style={{ borderRadius: 200 }}
                />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 12 }}>
                  Jesse Mary
                      </Text>
                <Text style={{ fontFamily: "SF-UI-Text-Regular", fontSize: 11 }}>
                  New York
                      </Text>
              </View>
            </View>
            <View style={{ justifyContent: 'center', padding: '2%' }}>
              <Image
                source={require("./assets/icons/3dots.png")}
              />
            </View>
          </View>
          <View style={{ height: 300, backgroundColor: 'green' }}>
            <Image
              source={require("./assets/images/image3.png")}
              style={{
                width: '100%',
                height: 300,
              }}
            />

          </View>
          <View style={{ height: 100 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ height: '40%', width: '20%', margin: '2%' }}>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/Heartbtm.png")}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/Comment.png")}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/shareLogo.png")}
                    />
                  </View>
                </View>
              </View>

              <View style={{ height: '40%', width: '20%', margin: '2%', alignItems: 'flex-end', }}>
                <Image
                  source={require("./assets/icons/Bookmark.png")}
                />
              </View>
            </View>
            <View style={{ paddingLeft: '3%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Bold", fontSize: 12, paddingBottom: '0.5%' }}>123 Likes</Text>
            </View>
            <View style={{ paddingLeft: '3%', flexDirection: 'row', paddingBottom: '0.5%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Bold", fontSize: 12 }}>jessemary </Text><Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 12 }}>New York city Bridge!</Text>
            </View>
            <View style={{ paddingLeft: '3%', paddingBottom: '0.5%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Regular", fontSize: 10, color: 'grey' }}>Add a comment...</Text>
            </View>
          </View>

        </View>


        <View style={{ height: 450, marginBottom: 10 }}>
          <View style={{ height: 50, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', padding: '7.5%' }}>
                <Image
                  source={require("./assets/icons/logo.png")}
                  style={{ borderRadius: 200 }}
                />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 12 }}>
                  John Ken
                      </Text>
                {/* <Text style = {{fontFamily:"SF-UI-Text-Regular",fontSize:11}}>
                      </Text> */}
              </View>
            </View>
            <View style={{ justifyContent: 'center', padding: '2%' }}>
              <Image
                source={require("./assets/icons/3dots.png")}
              />
            </View>
          </View>
          <View style={{ height: 300, backgroundColor: 'green' }}>
            <Image
              source={require("./assets/images/image.png")}
              style={{
                width: '100%',
                height: 300,
              }}
            />

          </View>
          <View style={{ height: 100 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ height: '40%', width: '20%', margin: '2%' }}>
                <View style={{ flexDirection: 'row', flex: 3 }}>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/Heartbtm.png")}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/Comment.png")}
                    />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                    <Image
                      source={require("./assets/icons/shareLogo.png")}
                    />
                  </View>
                </View>
              </View>

              <View style={{ height: '40%', width: '20%', margin: '2%', alignItems: 'flex-end', }}>
                <Image
                  source={require("./assets/icons/Bookmark.png")}
                />
              </View>
            </View>
            <View style={{ paddingLeft: '3%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Bold", fontSize: 12, paddingBottom: '0.5%' }}>400 Likes</Text>
            </View>
            <View style={{ paddingLeft: '3%', flexDirection: 'row', paddingBottom: '0.5%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Bold", fontSize: 12 }}>johnken </Text><Text style={{ fontFamily: "SF-UI-Text-Medium", fontSize: 12 }}>A beautiful Flower!</Text>
            </View>
            <View style={{ paddingLeft: '3%', paddingBottom: '0.5%' }}>
              <Text style={{ fontFamily: "SF-UI-Text-Regular", fontSize: 10, color: 'grey' }}>Add a comment...</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 60 }}></View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("./assets/icons/Home.png")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("./assets/icons/Search.png")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("./assets/icons/Reels.png")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("./assets/icons/Shop.png")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require("./assets/icons/Avatar.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: '100%',
    height: '7.5%',
    flex: 5,
    flexDirection: 'row',
    elevation: 2,
    backgroundColor: 'white',
    borderTopWidth: 0.2
  },
  content: {
    width: '100%',
    flex: 1
  }

});

export default App;