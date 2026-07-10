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
  category: 'football' | 'basketball' | 'baseball' | 'hockey' | 'soccer';
  image: string;
  available: boolean;
}

const merchandiseData: MerchandiseItem[] = [
  {
    id: '1',
    name: 'Lakers Home Jersey',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
    category: 'jersey',
    team: 'Lakers',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '2',
    name: 'Yankees Cap',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=300&fit=crop',
    category: 'hat',
    team: 'Yankees',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '3',
    name: 'Chiefs Championship Ring',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop',
    category: 'collectible',
    team: 'Chiefs',
    rating: 4.9,
    inStock: false,
  },
  {
    id: '4',
    name: 'Warriors Hoodie',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop',
    category: 'accessory',
    team: 'Warriors',
    rating: 4.7,
    inStock: true,
  },
];

const ticketData: TicketEvent[] = [
  {
    id: '1',
    title: 'Lakers vs Warriors',
    date: '2024-01-15',
    venue: 'Crypto.com Arena',
    price: 125.00,
    category: 'basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '2',
    title: 'Chiefs vs Bills',
    date: '2024-01-20',
    venue: 'Arrowhead Stadium',
    price: 89.00,
    category: 'football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=200&fit=crop',
    available: true,
  },
  {
    id: '3',
    title: 'Yankees vs Red Sox',
    date: '2024-01-25',
    venue: 'Yankee Stadium',
    price: 65.00,
    category: 'baseball',
    image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=200&fit=crop',
    available: true,
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