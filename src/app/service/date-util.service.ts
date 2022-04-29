import { Injectable } from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {
  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    // biến result chứa 1 mảng
    const now = new Date();
    // biến now nhận vào thời gian hiện tại
    diff = new Date(diff);
    // biến diff là thời gian mình chọn
    const years = differenceInYears(now, diff);
    // years = tính số năm khác biệt giữa now + diff
    if (years > 0) {
      result.push(`${years} years`);
      // đẩy string "biến-năm years" vào mảng result
      diff = addYears(diff, years);
      // thời gian khác biệt (diff) sẽ được + thêm năm vào. số năm đc thêm vào là số năm khác biệt giữa hiện tại và thời gian nhập
      // Tại sao phải làm tn ? các hàm differenceIn... sẽ tính thời gian khác biệt nhưng là tổng thời gian khác biệt (gồm tất cả
      // ngày + tháng + năm) tính theo tháng thay vì tính thời gian khác biệt giữa các tháng trong năm
      // Vậy nên khi set cho năm khác = năm hiện tại thì phép tính sẽ chỉ tính theo thời gian tháng. tương tự với days, seconds
    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
    // biến 1 mảng thành 1 chuỗi và cho phân cách giữa các phần tử = cách
  }

  constructor() {
  }
}
