import { Injectable } from '@angular/core';

export class Order {
    id: number;
    orderNumber: number;
    orderDate: string;
    deliveryDate: string;
    saleAmount: number;
    terms: string;
    customerStoreCity: string;
    employee: string;
}

const orders: Order[] = [{
    id: 1,
    orderNumber: 35703,
    orderDate: '2017/04/10',
    deliveryDate: '2017/04/13 9:00',
    saleAmount: 11800,
    terms: '15 Days',
    customerStoreCity: 'Los Angeles, CA',
    employee: 'Harv Mudd'
}, {
    id: 4,
    orderNumber: 35711,
    orderDate: '2017/01/12',
    deliveryDate: '2017/01/13 9:00',
    saleAmount: 16050,
    terms: '15 Days',
    customerStoreCity: 'San Jose, CA',
    employee: 'Jim Packard'
}, {
    id: 5,
    orderNumber: 35714,
    orderDate: '2017/01/22',
    deliveryDate: '2017/01/27 9:00',
    saleAmount: 14750,
    terms: '15 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 7,
    orderNumber: 35983,
    orderDate: '2017/02/07',
    deliveryDate: '2017/02/10 13:00',
    saleAmount: 3725,
    terms: '15 Days',
    customerStoreCity: 'Denver, CO',
    employee: 'Todd Hoffman'
}, {
    id: 11,
    orderNumber: 38466,
    orderDate: '2017/03/01',
    deliveryDate: '2017/03/03 17:45',
    saleAmount: 7800,
    terms: '15 Days',
    customerStoreCity: 'Los Angeles, CA',
    employee: 'Harv Mudd'
}, {
    id: 14,
    orderNumber: 39420,
    orderDate: '2017/02/15',
    deliveryDate: '2017/02/17 11:45',
    saleAmount: 20500,
    terms: '15 Days',
    customerStoreCity: 'San Jose, CA',
    employee: 'Jim Packard'
}, {
    id: 15,
    orderNumber: 39874,
    orderDate: '2017/02/04',
    deliveryDate: '2017/02/10 15:00',
    saleAmount: 9050,
    terms: '30 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 18,
    orderNumber: 42847,
    orderDate: '2017/02/15',
    deliveryDate: '2017/02/17 8:30',
    saleAmount: 20400,
    terms: '30 Days',
    customerStoreCity: 'Casper, WY',
    employee: 'Todd Hoffman'
}, {
    id: 30,
    orderNumber: 57429,
    orderDate: '2017/05/16',
    deliveryDate: '2017/05/19 11:45',
    saleAmount: 11050,
    terms: '30 Days',
    customerStoreCity: 'Phoenix, AZ',
    employee: 'Clark Morgan'
}, {
    id: 32,
    orderNumber: 58292,
    orderDate: '2017/05/13',
    deliveryDate: '2017/05/19 14:30',
    saleAmount: 13500,
    terms: '15 Days',
    customerStoreCity: 'Los Angeles, CA',
    employee: 'Harv Mudd'
}, {
    id: 36,
    orderNumber: 62427,
    orderDate: '2017/01/27',
    deliveryDate: '2017/02/03 18:00',
    saleAmount: 23500,
    terms: '15 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 39,
    orderNumber: 65977,
    orderDate: '2017/02/05',
    deliveryDate: '2017/02/10 13:15',
    saleAmount: 2550,
    terms: '15 Days',
    customerStoreCity: 'Casper, WY',
    employee: 'Todd Hoffman'
}, {
    id: 42,
    orderNumber: 68428,
    orderDate: '2017/04/10',
    deliveryDate: '2017/04/14 11:30',
    saleAmount: 10500,
    terms: '15 Days',
    customerStoreCity: 'Los Angeles, CA',
    employee: 'Harv Mudd'
}, {
    id: 43,
    orderNumber: 69477,
    orderDate: '2017/03/09',
    deliveryDate: '2017/03/10 12:00',
    saleAmount: 14200,
    terms: '15 Days',
    customerStoreCity: 'Anaheim, CA',
    employee: 'Harv Mudd'
}, {
    id: 46,
    orderNumber: 72947,
    orderDate: '2017/01/14',
    deliveryDate: '2017/01/20 9:00',
    saleAmount: 13350,
    terms: '30 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 47,
    orderNumber: 73088,
    orderDate: '2017/03/25',
    deliveryDate: '2017/03/31 17:15',
    saleAmount: 8600,
    terms: '30 Days',
    customerStoreCity: 'Reno, NV',
    employee: 'Clark Morgan'
}, {
    id: 51,
    orderNumber: 77297,
    orderDate: '2017/04/30',
    deliveryDate: '2017/05/05 18:00',
    saleAmount: 10850,
    terms: '30 Days',
    customerStoreCity: 'Phoenix, AZ',
    employee: 'Clark Morgan'
}, {
    id: 56,
    orderNumber: 84744,
    orderDate: '2017/02/10',
    deliveryDate: '2017/02/17 14:00',
    saleAmount: 4650,
    terms: '30 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 57,
    orderNumber: 85028,
    orderDate: '2017/05/17',
    deliveryDate: '2017/05/19 12:00',
    saleAmount: 2575,
    terms: '30 Days',
    customerStoreCity: 'Reno, NV',
    employee: 'Clark Morgan'
}, {
    id: 59,
    orderNumber: 87297,
    orderDate: '2017/04/21',
    deliveryDate: '2017/04/28 9:00',
    saleAmount: 14200,
    terms: '30 Days',
    customerStoreCity: 'Casper, WY',
    employee: 'Todd Hoffman'
}, {
    id: 65,
    orderNumber: 94726,
    orderDate: '2017/05/22',
    deliveryDate: '2017/05/26 13:30',
    saleAmount: 20500,
    terms: '15 Days',
    customerStoreCity: 'San Jose, CA',
    employee: 'Jim Packard'
}, {
    id: 66,
    orderNumber: 95266,
    orderDate: '2017/03/10',
    deliveryDate: '2017/03/17 11:45',
    saleAmount: 9050,
    terms: '15 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 69,
    orderNumber: 98477,
    orderDate: '2017/01/01',
    deliveryDate: '2017/01/06 9:00',
    saleAmount: 23500,
    terms: '15 Days',
    customerStoreCity: 'Casper, WY',
    employee: 'Todd Hoffman'
}, {
    id: 78,
    orderNumber: 174884,
    orderDate: '2017/04/10',
    deliveryDate: '2017/04/14 8:30',
    saleAmount: 7200,
    terms: '30 Days',
    customerStoreCity: 'Denver, CO',
    employee: 'Todd Hoffman'
}, {
    id: 81,
    orderNumber: 188877,
    orderDate: '2017/02/11',
    deliveryDate: '2017/02/17 16:00',
    saleAmount: 8750,
    terms: '30 Days',
    customerStoreCity: 'Phoenix, AZ',
    employee: 'Clark Morgan'
}, {
    id: 82,
    orderNumber: 191883,
    orderDate: '2017/02/05',
    deliveryDate: '2017/02/10 18:30',
    saleAmount: 9900,
    terms: '30 Days',
    customerStoreCity: 'Los Angeles, CA',
    employee: 'Harv Mudd'
}, {
    id: 83,
    orderNumber: 192474,
    orderDate: '2017/01/21',
    deliveryDate: '2017/01/27 12:45',
    saleAmount: 12800,
    terms: '30 Days',
    customerStoreCity: 'Anaheim, CA',
    employee: 'Harv Mudd'
}, {
    id: 84,
    orderNumber: 193847,
    orderDate: '2017/03/21',
    deliveryDate: '2017/03/24 9:00',
    saleAmount: 14100,
    terms: '30 Days',
    customerStoreCity: 'San Diego, CA',
    employee: 'Harv Mudd'
}, {
    id: 85,
    orderNumber: 194877,
    orderDate: '2017/03/06',
    deliveryDate: '2017/03/10 18:15',
    saleAmount: 4750,
    terms: '30 Days',
    customerStoreCity: 'San Jose, CA',
    employee: 'Jim Packard'
}, {
    id: 86,
    orderNumber: 195746,
    orderDate: '2017/05/26',
    deliveryDate: '2017/06/02 17:00',
    saleAmount: 9050,
    terms: '30 Days',
    customerStoreCity: 'Las Vegas, NV',
    employee: 'Harv Mudd'
}, {
    id: 87,
    orderNumber: 197474,
    orderDate: '2017/03/02',
    deliveryDate: '2017/03/03 11:00',
    saleAmount: 6400,
    terms: '30 Days',
    customerStoreCity: 'Reno, NV',
    employee: 'Clark Morgan'
}, {
    id: 88,
    orderNumber: 198746,
    orderDate: '2017/05/09',
    deliveryDate: '2017/05/12 15:45',
    saleAmount: 15700,
    terms: '30 Days',
    customerStoreCity: 'Denver, CO',
    employee: 'Todd Hoffman'
}, {
    id: 91,
    orderNumber: 214222,
    orderDate: '2017/02/08',
    deliveryDate: '2017/02/10 9:45',
    saleAmount: 11050,
    terms: '30 Days',
    customerStoreCity: 'Phoenix, AZ',
    employee: 'Clark Morgan'
}];

@Injectable({
  providedIn: 'root'
})
export class FilteringService {
    getOrders(): Order[] {
        return orders;
    }
}
