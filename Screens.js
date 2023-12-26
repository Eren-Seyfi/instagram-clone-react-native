import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

// Icon
import {
  Home,
  HomeFilled,
  Search,
  SearchFilled,
  Reel,
  ReelFilled,
  Shop,
  ShophFilled,
  Profile,
  ProfilehFilled,
} from "./Icons";

// screens
import HomeScreen from "./screens/Home";
import SearchScreen from "./screens/Search";
import ReelScreen from "./screens/Reel";
import ShopScreen from "./screens/Shop";
import ProfileScreen from "./screens/Profile";

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#262626",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: "Anasayfa",

          tabBarIcon: ({ focused, color }) => {
            if (focused) return <HomeFilled size={36} fill={color} />;

            return <Home size={36} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerTitle: "Ara",

          tabBarIcon: ({ focused, color }) => {
            if (focused) return <SearchFilled size={36} fill={color} />;

            return <Search size={36} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          headerTitle: "hikayeler",

          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ReelFilled size={36} fill={color} />;

            return <Reel size={36} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          headerTitle: "mağza",

          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ReelFilled size={36} fill={color} />;

            return <Reel size={36} fill={color} />;
          },
        }}
      />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default Screens;
