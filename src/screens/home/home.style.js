import { Platform, StatusBar } from 'react-native';
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        padding: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,//Isso aqui é para o app não ficar fullscreem
        marginTop: 20,
    },
    logo: {
        width: 100,
        height: 30
    },
    dashboard: {
        width: "100%",
        backgroundColor: COLORS.blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dashboardValor: {
        color: COLORS.white,
        fontSize: FONT_SIZE.xl,
        fontWeight: "bold"
    },
    dashboardText: {
        color: COLORS.gray,
        fontSize: FONT_SIZE.sm,
        fontWeight: "bold"
    },
    dashboardImg: {
        width: 35,
        height: 60,
    },
    desepesasTitulo: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        marginTop: 15,
        fontWeight: "bold",
    },
    btnAdd: {
        position: "absolute",
        bottom: 12
    },
    btnAddImage: {
        width: 50,
        height: 50
    }
}