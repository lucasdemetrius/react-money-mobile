import { Image, Text, View} from "react-native";
import { styles } from "./despesa.style.js";

const Despesa = (props) => {
    return <View style={styles.despesa}>
        <View style={styles.containerIcon}>
            <Image 
                style={styles.despesaIcon}
                source={{uri: props.icon}} 
            />
        </View>

        <View style={styles.containerCategoria}>
            <Text style={styles.despesaCategoria}>{props.categoria}</Text>
            <Text style={styles.despesaDescricao}>{props.descricao}</Text>
        </View>

        <View style={styles.containerValor}>
            <Text style={styles.despesaValor}>{props.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</Text>            
        </View>

    </View>
}

export default Despesa