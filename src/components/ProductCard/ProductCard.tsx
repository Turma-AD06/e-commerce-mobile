import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image";
import { FontAwesome6 } from "@expo/vector-icons";
import { ProductModel } from "@/src/services/product.service";
import { useCart } from "@/src/contexts/CartContext";

interface ProductCardProps {
  product: ProductModel;
}
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addProduct } = useCart();

  return (
    <View style={styles.productCardContainer}>
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={product.picture}
          contentFit="cover"
          placeholder={{ blurhash }}
          transition={1000}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>
            {(product.price / 100).toLocaleString("pt-br", {
              currency: "BRL",
              style: "currency",
            })}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.productButton}
        onPress={() => addProduct(product)}
      >
        <View style={styles.productButtonContainer}>
          <FontAwesome6
            name="cart-plus"
            size={16}
            color="white"
            style={styles.productButtonIcon}
          />
          <Text style={styles.productButtonText}>Adicionar ao carrinho</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
