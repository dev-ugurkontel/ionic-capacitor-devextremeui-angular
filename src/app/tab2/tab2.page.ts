import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';

import { Order, FilteringService } from '../services/filtering/filtering.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  preserveWhitespaces: true
})
export class Tab2Page {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  orders: Order[];
  saleAmountHeaderFilter: any;
  applyFilterTypes: any;
  currentFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;

  constructor(
    filteringService: FilteringService
  ) {
      this.orders = filteringService.getOrders();
      this.showFilterRow = true;
      this.showHeaderFilter = true;
      this.applyFilterTypes = [{
          key: 'auto',
          name: 'Immediately'
      }, {
          key: 'onClick',
          name: 'On Button Click'
      }];
      this.saleAmountHeaderFilter = [{
          text: 'Less than $3000',
          value: ['SaleAmount', '<', 3000]
      }, {
          text: '$3000 - $5000',
          value: [
              ['SaleAmount', '>=', 3000],
              ['SaleAmount', '<', 5000]
          ]
      }, {
          text: '$5000 - $10000',
          value: [
              ['SaleAmount', '>=', 5000],
              ['SaleAmount', '<', 10000]
          ]
      }, {
          text: '$10000 - $20000',
          value: [
              ['SaleAmount', '>=', 10000],
              ['SaleAmount', '<', 20000]
          ]
      }, {
          text: 'Greater than $20000',
          value: ['SaleAmount', '>=', 20000]
      }];
      this.currentFilter = this.applyFilterTypes[0].key;
      this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    }

    private static getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }

    calculateFilterExpression(value, selectedFilterOperations, target) {
        const column = this as any;
        if(target === 'headerFilter' && value === 'weekends') {
            return [[Tab2Page.getOrderDay, '=', 0], 'or', [Tab2Page.getOrderDay, '=', 6]];
        }
        return column.defaultCalculateFilterExpression.apply(this, arguments);
    }

    orderHeaderFilter(data) {
        data.dataSource.postProcess = (results) => {
            results.push({
                text: 'Weekends',
                value: 'weekends'
            });
            return results;
        };
    }

    clearFilter() {
        this.dataGrid.instance.clearFilter();
    }
}
