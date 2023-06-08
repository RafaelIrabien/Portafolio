//Esta línea importa el módulo de ruta incorporado de Node.js, 
//que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');
//Esta línea importa MiniCssExtractPlugin, un complemento de paquete web que extrae CSS en archivos separados. 
//Crea un nuevo archivo CSS en lugar de incrustarlo dentro del paquete de JavaScript.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//Esta línea importa HtmlWebpackPlugin, un complemento de paquete web que simplifica la creación de archivos HTML 
//para servir sus paquetes de paquetes web. Inyecta automáticamente secuencias de comandos incluidas y etiquetas de enlace en el archivo HTML.
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Esta línea importa CssMinimizerPlugin, un complemento de paquete web que realiza la minimización y optimización de CSS. 
//Ayuda a minimizar el tamaño de los archivos CSS en la compilación de su paquete web.
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//Esta línea importa TerserPlugin, un complemento de paquete web que realiza la minimización y optimización de JavaScript mediante Terser. 
//Ayuda a reducir el tamaño de los archivos JavaScript en la compilación de su paquete web.
const TerserPlugin = require("terser-webpack-plugin");
//Esta línea importa CleanWebpackPlugin, un complemento de paquete web que limpia el directorio de salida antes de cada compilación. 
//Garantiza que solo se generen los archivos necesarios en el directorio de salida y elimina los archivos no utilizados de compilaciones anteriores.
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



//objeto de configuración para un archivo de configuración de paquete web.
//Exporta un objeto con varias propiedades que definen cómo el paquete web debe procesar y agrupar el código.
//En general, esta configuración configura el paquete web para agrupar archivos JavaScript, CSS y HTML,
//al mismo tiempo que maneja imágenes como activos. 
//Los archivos agrupados se enviarán al directorio dist, con nombres de archivo únicos generados en función de su contenido.
module.exports = {
    //entry: Especifica el punto de entrada para la aplicación
    entry: './index.js',
    //output: Configura los ajustes de salida para los archivos incluidos.
    output : {
        //path: Especifica el directorio de salida para los archivos empaquetados.
        //En este caso, usa path.resolve para resolver el directorio dist relativo al directorio actual (__dirname).
        path: path.resolve(__dirname, 'dist'),
        //especifica el patrón de nomenclatura para los archivos del paquete de salida.
        //[name] es un marcador de posición para el nombre del fragmento de entrada y 
        //[contenthash] es un marcador de posición para un hash único basado en el contenido del archivo.
        //La extensión .js indica que los archivos de salida serán archivos JavaScript.
        filename: '[name].[contenthash].js',
        //Especifica el patrón de nombres para los archivos de activos emitidos. 
        //[hash] es un marcador de posición para un hash único basado en el contenido del archivo, 
        //[ext] es la extensión del archivo original y 
        //[query] representa la cadena de consulta. 
        //Los archivos de activos incluyen imágenes (png, svg, jpg, gif) y se almacenarán en el directorio dist/assets.
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
        //Define cómo el paquete web debe manejar diferentes tipos de módulos (archivos) en su aplicación.
        module: {
            //Una serie de reglas que especifican cómo el paquete web debe transformar tipos específicos de archivos.
            rules:[
                {
                //Una expresión regular que coincide con las extensiones de archivo que procesará el cargador asociado.
                test: /\.css$/i,
                //Una matriz de cargadores que se aplicarán a los archivos coincidentes.
                //Los cargadores procesan los archivos y los transforman de alguna manera.
                //MiniCssExtractPlugin.loader: Este cargador extrae CSS en archivos separados. Se utiliza para procesar archivos .css.
                //css-loader: Este cargador interpreta las instrucciones @import y url() dentro de los archivos CSS. Se utiliza para procesar archivos .css.
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                test:/\.html$/i,
                //html-loader: este cargador exporta HTML como una cadena. Se utiliza para procesar archivos .html.
                use:['html-loader'],
                },
                {
                test: /\.(png|svg|jpg|gif)$/,
                //asset/resource: este tipo se utiliza para manejar archivos de imagen (png, svg, jpg, gif).
                //Emite el archivo en el directorio de salida y devuelve la URL pública.
                type: 'asset/resource',
                }
            ],
        },


        //Estos complementos se usan comúnmente en configuraciones de paquetes web para manejar la extracción de CSS, 
        //la generación de HTML y la limpieza del directorio de salida.
        plugins: [
            //este complemento extrae CSS en archivos separados. 
            //Toma un objeto de opciones con una propiedad de nombre de archivo que especifica el patrón de nombre de archivo de salida para el archivo CSS extraído. 
            //En su ejemplo, usa el patrón [name].[hash].css, donde [name] es el nombre del fragmento de entrada y [hash] es un hash único generado por webpack.
            new MiniCssExtractPlugin({filename:'[name].[hash].css'}),
            //este complemento simplifica la creación de archivos HTML para servir sus paquetes de paquetes web. 
            //Genera un archivo HTML basado en una plantilla especificada por la propiedad de la plantilla. En su caso, utiliza el archivo index.php como plantilla.
            new HtmlWebpackPlugin({ template: './index.html' }),
            //Este complemento limpia el directorio de salida antes de cada compilación. 
            //Garantiza que solo estén presentes los archivos generados por la compilación actual, 
            //eliminando los archivos obsoletos de compilaciones anteriores.
            new CleanWebpackPlugin(),
        ],

        //Al utilizar estos minimizadores en la propiedad de optimización de la configuración del paquete web, 
        //se asegura de que la salida de CSS y JavaScript generada se minimice y optimice para su uso en producción.
        optimization: {
            minimizer:[
                new CssMinimizerPlugin(),
                new TerserPlugin(),
            ],
        },
};