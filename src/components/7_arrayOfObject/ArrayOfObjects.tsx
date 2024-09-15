import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CarComponent from '../carComponent/CarComponent'
import Product from './Product'

const ArrayOfObjects = () => {

    const products = [
        {
          "id": 1,
          "productName": "Apple iPhone 14",
          "price": "$999",
          "rating": "4.7",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Apple+iPhone+14",
          "desc": "The latest iPhone with advanced features."
        },
        {
          "id": 2,
          "productName": "Samsung Galaxy S23",
          "price": "$899",
          "rating": "4.6",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Samsung+Galaxy+S23",
          "desc": "A high-performance smartphone with a stunning display."
        },
        {
          "id": 3,
          "productName": "Google Pixel 8",
          "price": "$799",
          "rating": "4.5",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Google+Pixel+8",
          "desc": "Google's latest phone with an exceptional camera."
        },
        {
          "id": 4,
          "productName": "OnePlus 11",
          "price": "$749",
          "rating": "4.4",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=OnePlus+11",
          "desc": "A sleek and fast smartphone with great value."
        },
        {
          "id": 5,
          "productName": "Sony Xperia 5 IV",
          "price": "$899",
          "rating": "4.3",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Sony+Xperia+5+IV",
          "desc": "A premium phone with excellent camera capabilities."
        },
        {
          "id": 6,
          "productName": "Xiaomi Mi 13",
          "price": "$699",
          "rating": "4.2",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Xiaomi+Mi+13",
          "desc": "A budget-friendly phone with top-notch features."
        },
        {
          "id": 7,
          "productName": "Oppo Find X5",
          "price": "$749",
          "rating": "4.5",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Oppo+Find+X5",
          "desc": "A stylish phone with great performance and battery life."
        },
        {
          "id": 8,
          "productName": "Huawei P50 Pro",
          "price": "$799",
          "rating": "4.4",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Huawei+P50+Pro",
          "desc": "An elegant phone with an excellent camera setup."
        },
        {
          "id": 9,
          "productName": "Nokia X30",
          "price": "$699",
          "rating": "4.3",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Nokia+X30",
          "desc": "A durable phone with reliable performance."
        },
        {
          "id": 10,
          "productName": "LG V60 ThinQ",
          "price": "$649",
          "rating": "4.2",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=LG+V60+ThinQ",
          "desc": "A phone with a large screen and powerful performance."
        },
        {
          "id": 11,
          "productName": "Apple iPhone 13",
          "price": "$899",
          "rating": "4.6",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Apple+iPhone+13",
          "desc": "A previous-generation iPhone with great features."
        },
        {
          "id": 12,
          "productName": "Samsung Galaxy Z Fold 4",
          "price": "$1799",
          "rating": "4.8",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Samsung+Galaxy+Z+Fold+4",
          "desc": "A foldable phone with cutting-edge technology."
        },
        {
          "id": 13,
          "productName": "Google Pixel 7 Pro",
          "price": "$899",
          "rating": "4.7",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Google+Pixel+7+Pro",
          "desc": "Google's flagship phone with enhanced features."
        },
        {
          "id": 14,
          "productName": "OnePlus Nord 2",
          "price": "$499",
          "rating": "4.3",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=OnePlus+Nord+2",
          "desc": "A mid-range phone with excellent performance."
        },
        {
          "id": 15,
          "productName": "Sony Xperia 1 III",
          "price": "$1199",
          "rating": "4.5",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Sony+Xperia+1+III",
          "desc": "A high-end phone with advanced camera features."
        },
        {
          "id": 16,
          "productName": "Xiaomi Poco F4",
          "price": "$699",
          "rating": "4.4",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Xiaomi+Poco+F4",
          "desc": "A phone with high performance and value."
        },
        {
          "id": 17,
          "productName": "Oppo Reno 8",
          "price": "$549",
          "rating": "4.3",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Oppo+Reno+8",
          "desc": "A stylish and capable smartphone."
        },
        {
          "id": 18,
          "productName": "Huawei Mate 40 Pro",
          "price": "$999",
          "rating": "4.6",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Huawei+Mate+40+Pro",
          "desc": "A premium device with cutting-edge features."
        },
        {
          "id": 19,
          "productName": "Nokia G50",
          "price": "$399",
          "rating": "4.2",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Nokia+G50",
          "desc": "A budget-friendly phone with decent performance."
        },
        {
          "id": 20,
          "productName": "LG Wing",
          "price": "$999",
          "rating": "4.4",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=LG+Wing",
          "desc": "A unique phone with a swiveling dual-screen."
        },
        {
          "id": 21,
          "productName": "Apple iPhone 12 Mini",
          "price": "$699",
          "rating": "4.5",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Apple+iPhone+12+Mini",
          "desc": "A compact version of the iPhone with premium features."
        },
        {
          "id": 22,
          "productName": "Samsung Galaxy S21 FE",
          "price": "$699",
          "rating": "4.4",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Samsung+Galaxy+S21+FE",
          "desc": "A fan edition phone with great value."
        },
        {
          "id": 23,
          "productName": "Google Pixel 6a",
          "price": "$449",
          "rating": "4.3",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=Google+Pixel+6a",
          "desc": "An affordable version of the Pixel with solid performance."
        },
        {
          "id": 24,
          "productName": "OnePlus 9 Pro",
          "price": "$969",
          "rating": "4.5",
          "imageUrl": "https://dummyimage.com/150x150/000/fff&text=OnePlus+9+Pro",
          "desc": "A high-end phone with excellent specs and features."
        },
    ]
      
  

    return (
        <View>
            <FlatList

                data={products}

                keyExtractor={item => item.id.toString()}

                renderItem={({ item }) => {
                    return <CarComponent product={
                        item}/>
                }} />

        </View>
    )
}

export default ArrayOfObjects
