import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { useTheme } from '@/hooks/theme-context';
import { ShoppingCart, Search, Star, Calendar, MapPin, Ticket } from 'lucide-react-native';

interface MerchandiseItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'jersey' | 'hat' | 'accessory' | 'collectible';
  team: string;
  rating: number;
  inStock: boolean;
}

interface TicketEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  price: number;
  category: 'soccer' | 'tennis' | 'cycling' | 'golf' | 'rugby' | 'motor racing' | 'combat sports' | 'boxing' | 'olympic sports' | 'nfl' | 'ncaa football' | 'ncaa basketball' | 'ncaa wrestling' | 'ncaa track' | 'baseball' | 'basketball';
  image: string;
  available: boolean;
}

const merchandiseData: MerchandiseItem[] = [
  {
    id: '1',
    name: 'USA World Cup 2026 Home Jersey',
    price: 94.99,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'USA Soccer',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '2',
    name: 'Argentina World Cup 2026 Away Jersey',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'Argentina',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '3',
    name: 'Wimbledon 2026 Official Cap',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=300&fit=crop',
    category: 'hat',
    team: 'Wimbledon',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '4',
    name: 'Yankees All-Star Game Cap',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
    category: 'hat',
    team: 'Yankees',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '5',
    name: 'British GP 2026 Souvenir Model Car',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1504280506541-aca063246d74?w=300&h=300&fit=crop',
    category: 'collectible',
    team: 'Formula 1',
    rating: 4.8,
    inStock: false,
  },
  {
    id: '6',
    name: 'UFC 316 Event T-Shirt',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=300&h=300&fit=crop',
    category: 'accessory',
    team: 'UFC',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '7',
    name: 'Chiefs Super Bowl Champions Hat',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1583237684982-04489d39f5d3?w=300&h=300&fit=crop',
    category: 'hat',
    team: 'Kansas City Chiefs',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '8',
    name: 'Canelo vs Crawford Fight Night Jersey',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1546519638-29e946c5b7df?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'Boxing',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '9',
    name: 'Georgia Bulldogs National Champs Hoodie',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'Georgia Bulldogs',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '10',
    name: 'Duke Blue Devils Basketball Jersey',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1546519638-29e946c035d8?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'Duke Blue Devils',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '11',
    name: 'Penn State Wrestling Singlet',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'Penn State Wrestling',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '12',
    name: 'OKC Thunder NBA Champions Cap',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1546519638-29e946c5b7df?w=300&h=300&fit=crop',
    category: 'hat',
    team: 'Oklahoma City Thunder',
    rating: 4.9,
    inStock: false,
  },
];

const ticketData: TicketEvent[] = [
  {
    id: '1',
    title: 'World Cup 2026 Final',
    date: '2026-07-19',
    venue: 'MetLife Stadium, NJ',
    price: 650.00,
    category: 'soccer',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '2',
    title: 'Wimbledon Men\'s Final',
    date: '2026-07-12',
    venue: 'All England Club',
    price: 485.00,
    category: 'tennis',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '3',
    title: 'MLB All-Star Game',
    date: '2026-07-14',
    venue: 'Truist Park, Atlanta',
    price: 125.00,
    category: 'baseball',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '4',
    title: 'British Grand Prix',
    date: '2026-07-12',
    venue: 'Silverstone Circuit',
    price: 295.00,
    category: 'motor racing',
    image: 'https://images.unsplash.com/photo-1504280506541-aca063246d74?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '5',
    title: 'UFC 316: Makhachev vs Tsarukyan',
    date: '2026-07-11',
    venue: 'T-Mobile Arena, Las Vegas',
    price: 350.00,
    category: 'combat sports',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '6',
    title: 'The Open Championship Final Round',
    date: '2026-07-12',
    venue: 'Royal Liverpool',
    price: 95.00,
    category: 'golf',
    image: 'https://images.unsplash.com/photo-1534150174843-8b52f91f9627?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '7',
    title: 'Canelo vs Crawford PPV Live',
    date: '2026-09-13',
    venue: 'Riyadh, Saudi Arabia',
    price: 79.99,
    category: 'boxing',
    image: 'https://images.unsplash.com/photo-1546519638-29e946c5b7df?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '8',
    title: 'Chiefs vs 49ers Preseason',
    date: '2026-08-07',
    venue: 'Arrowhead Stadium, KC',
    price: 85.00,
    category: 'nfl',
    image: 'https://images.unsplash.com/photo-1583237684982-04489d39f5d3?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '9',
    title: 'Georgia vs Clemson Season Opener',
    date: '2026-09-05',
    venue: 'Mercedes-Benz Stadium, Atlanta',
    price: 175.00,
    category: 'ncaa football',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '10',
    title: 'Duke vs Kentucky Champions Classic',
    date: '2026-11-11',
    venue: 'Madison Square Garden, NYC',
    price: 140.00,
    category: 'ncaa basketball',
    image: 'https://images.unsplash.com/photo-1546519638-29e946c035d8?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '11',
    title: 'Penn State vs Iowa Dual Meet',
    date: '2026-11-21',
    venue: 'Rec Hall, State College',
    price: 45.00,
    category: 'ncaa wrestling',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '12',
    title: 'NCAA Outdoor Track & Field Championships',
    date: '2026-06-12',
    venue: 'Hayward Field, Eugene',
    price: 35.00,
    category: 'ncaa track',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=200&fit=crop',
    available: false,
  },
];

export default function ShopScreen() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<'merchandise' | 'tickets'>('merchandise');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<string[]>([]);

  const filteredMerchandise = merchandiseData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTickets = ticketData.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.venue.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (itemId: string) => {
    setCart(prev => [...prev, itemId]);
    Alert.alert('Added to Cart', 'Item has been added to your cart!');
  };

  const renderMerchandiseItem = (item: MerchandiseItem) => (
    <View key={item.id} style={[styles.itemCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={[styles.itemName, { color: colors.text }]}>{item.name}</Text>
        <View style={styles.teamContainer}>
          <Text style={[styles.teamText, { backgroundColor: colors.textSecondary }]}>{item.team}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Star size={16} color={colors.orange} fill={colors.orange} />
          <Text style={[styles.rating, { color: colors.textSecondary }]}>{item.rating}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={[styles.price, { color: colors.orange }]}>${item.price}</Text>
          <TouchableOpacity
            style={[
              styles.addButton,
              {
                backgroundColor: item.inStock ? colors.orange : colors.textSecondary,
              },
            ]}
            onPress={() => item.inStock && addToCart(item.id)}
            disabled={!item.inStock}
          >
            <ShoppingCart size={16} color={colors.background} />
            <Text style={[styles.addButtonText, { color: colors.background }]}>
              {item.inStock ? 'Add' : 'Out of Stock'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderTicketItem = (event: TicketEvent) => (
    <View key={event.id} style={[styles.ticketCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Image source={{ uri: event.image }} style={styles.ticketImage} />
      <View style={styles.ticketInfo}>
        <Text style={[styles.ticketTitle, { color: colors.text }]}>{event.title}</Text>
        <View style={styles.ticketDetails}>
          <View style={styles.detailRow}>
            <Calendar size={16} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.textSecondary }]}>{event.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <MapPin size={16} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.textSecondary }]}>{event.venue}</Text>
          </View>
        </View>
        <View style={styles.ticketPriceRow}>
          <Text style={[styles.ticketPrice, { color: colors.orange }]}>From ${event.price}</Text>
          <TouchableOpacity
            style={[
              styles.buyButton,
              {
                backgroundColor: event.available ? colors.orange : colors.textSecondary,
              },
            ]}
            onPress={() => event.available && addToCart(event.id)}
            disabled={!event.available}
          >
            <Ticket size={16} color={colors.background} />
            <Text style={[styles.buyButtonText, { color: colors.background }]}>
              {event.available ? 'Buy Tickets' : 'Sold Out'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            {
              backgroundColor: activeTab === 'merchandise' ? colors.orange : 'transparent',
              borderColor: colors.orange,
            },
          ]}
          onPress={() => setActiveTab('merchandise')}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === 'merchandise' ? colors.background : colors.orange,
              },
            ]}
          >
            Merchandise
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            {
              backgroundColor: activeTab === 'tickets' ? colors.orange : 'transparent',
              borderColor: colors.orange,
            },
          ]}
          onPress={() => setActiveTab('tickets')}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === 'tickets' ? colors.background : colors.orange,
              },
            ]}
          >
            Tickets
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Search size={20} color={colors.textSecondary} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder={`Search ${activeTab}...`}
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Cart Counter */}
      {cart.length > 0 && (
        <View style={[styles.cartCounter, { backgroundColor: colors.orange }]}>
          <ShoppingCart size={16} color={colors.background} />
          <Text style={[styles.cartCount, { color: colors.background }]}>{cart.length}</Text>
        </View>
      )}

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'merchandise' ? (
          <View style={styles.grid}>
            {filteredMerchandise.map(renderMerchandiseItem)}
          </View>
        ) : (
          <View style={styles.ticketList}>
            {filteredTickets.map(renderTicketItem)}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    margin: 16,
    borderRadius: 25,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 4,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold' as const,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  cartCounter: {
    position: 'absolute',
    top: 80,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 1000,
  },
  cartCount: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold' as const,
  },
  content: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  itemCard: {
    width: '48%',
    margin: '1%',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  itemInfo: {
    padding: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold' as const,
    marginBottom: 4,
  },
  teamContainer: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  teamText: {
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
    color: '#FFFFFF',
    fontWeight: '600' as const,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold' as const,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addButtonText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 'bold' as const,
  },
  ticketList: {
    paddingHorizontal: 16,
  },
  ticketCard: {
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  ticketImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  ticketInfo: {
    padding: 16,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    marginBottom: 12,
  },
  ticketDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
  },
  ticketPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketPrice: {
    fontSize: 20,
    fontWeight: 'bold' as const,
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 25,
  },
  buyButtonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'bold' as const,
  },
});