import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  myControl = new FormControl();
  options: User[] = [
    { name: 'Абрамов Адам Фёдорович' },
    { name: 'Агафонов Григорий Дмитриевич' },
    { name: 'Алексеев Корнелий Платонович' },
    { name: 'Антонов Устин Владимирович' },
    { name: 'Архипов Александр Викторович' },
    { name: 'Афанасьев Викентий Михайлович' },
    { name: 'Батейко Роберт Станиславович' },
    { name: 'Бобылёв Михаил Алексеевич' },
    { name: 'Бобылёв Нестор Васильевич' },
    { name: 'Брагин Карл Валериевич' },
    { name: 'Быков Ефрем Богданович' },
    { name: 'Вальковский Жерар Львович' },
    { name: 'Воронцов Виктор Сергеевич' },
    { name: 'Городецкий Жигер Васильевич' },
    { name: 'Гребневский Юлиан Платонович' },
    { name: 'Гришин Егор Платонович' },
    { name: 'Дементьев Яков Петрович' },
    { name: 'Егоров Бронислав Романович' },
    { name: 'Егоров Устин Данилович' },
    { name: 'Ефремов Харитон Фёдорович' },
    { name: 'Зимин Эдуард Вадимович' },
    { name: 'Зыков Ярослав Иванович' },
    { name: 'Иваненко Шерлок Брониславович' },
    { name: 'Иванив Заур Сергеевич' },
    { name: 'Иванив Эдуард Брониславович' },
    { name: 'Иванов Валериан Юхимович' },
    { name: 'Ильин Феликс Данилович' },
    { name: 'Ильин Харитон Виталиевич' },
    { name: 'Кириллов Чарльз Вадимович' },
    { name: 'Ковальчук Евдоким Романович' },
    { name: 'Козлов Платон Фёдорович' },
    { name: 'Колесник Корнелий Виталиевич' },
    { name: 'Колобов Устин Романович' },
    { name: 'Кононов Ян Иванович' },
    { name: 'Копылов Бронислав Юхимович' },
    { name: 'Королёв Руслан Анатолиевич' },
    { name: 'Котов Оливер Виталиевич' },
    { name: 'Красильников Тарас Станиславович' },
    { name: 'Крюков Донат Петрович' },
    { name: 'Кудрявцев Йонас Дмитриевич' },
    { name: 'Кудряшов Григорий Романович' },
    { name: 'Ларионов Ростислав Станиславович' },
    { name: 'Лебедев Бронислав Викторович' },
    { name: 'Логинов Леопольд Фёдорович' },
    { name: 'Мазайло Антон Григорьевич' },
    { name: 'Максимов Зуфар Михайлович' },
    { name: 'Марочко Йоган Фёдорович' },
    { name: 'Мартынов Савва Ярославович' },
    { name: 'Маслов Вениамин Платонович' },
    { name: 'Меркушев Аким Андреевич' },
    { name: 'Мирный Чеслав Львович' },
    { name: 'Миронов Бронислав Романович' },
    { name: 'Михайлов Харитон Артёмович' },
    { name: 'Многогрешный Ждан Михайлович' },
    { name: 'Многогрешный Михаил Фёдорович' },
    { name: 'Мухин Герасим Богданович' },
    { name: 'Мясников Назар Данилович' },
    { name: 'Назаров Роберт Сергеевич' },
    { name: 'Нестеров Герман Виталиевич' },
    { name: 'Никитин Йозеф Ярославович' },
    { name: 'Носов Дан Богданович' },
    { name: 'Овчинников Арсений Платонович' },
    { name: 'Осипов Эдуард Фёдорович' },
    { name: 'Панов Людовик Фёдорович' },
    { name: 'Панов Яромир Ярославович' },
    { name: 'Предыбайло Ленар Леонидович' },
    { name: 'Романенко Шамиль Иванович' },
    { name: 'Саксаганский Макар Максимович' },
    { name: 'Самсонов Святослав Платонович' },
    { name: 'Сасько Харитон Викторович' },
    { name: 'Селиверстов Бронислав Романович' },
    { name: 'Сердюк Юлий Станиславович' },
    { name: 'Соболев Даниил Владимирович' },
    { name: 'Соболев Яков Брониславович' },
    { name: 'Соловьёв Борис Вадимович' },
    { name: 'Соловьёв Фёдор Борисович' },
    { name: 'Спивак Цезарь Анатолиевич' },
    { name: 'Стегайло Нестор Сергеевич' },
    { name: 'Суханов Жигер Эдуардович' },
    { name: 'Суханов Олег Фёдорович' },
    { name: 'Сыпченко Гордей Фёдорович' },
    { name: 'Таранец Цефас Валериевич' },
    { name: 'Тимошенко Устин Вадимович' },
    { name: 'Трофимов Пётр Сергеевич' },
    { name: 'Уваров Шерлок Александрович' },
    { name: 'Устинов Спартак Сергеевич' },
    { name: 'Фомичёв Никодим Виталиевич' },
    { name: 'Фомичёв Юлий Вадимович' },
    { name: 'Фролов Фёдор Данилович' },
    { name: 'Фёдоров Нестор Богданович' },
    { name: 'Харитонов Йоган Александрович' },
    { name: 'Цушко Артемий Максимович' },
    { name: 'Чухрай Георгий Евгеньевич' },
    { name: 'Шевченко Закир Леонидович' },
    { name: 'Ширяев Добрыня Брониславович' },
    { name: 'Ширяев Юрий Данилович' },
    { name: 'Юдин Шарль Эдуардович' },
    { name: 'Яценюк Глеб Богданович' },
    { name: 'Яценюк Григорий Львович' },
  ];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: [''],
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
