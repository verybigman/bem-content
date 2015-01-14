# menu-item

Используется как элемент блока [`menu`](../menu/menu.ru.md). Блок `menu-item` предоставляет возможность изменять состояние, содержимое и тип пунктов меню.

`menu-item` отображается на странице как HTML-элемент с тегом `<div>` и свойством `role="menuitem"`.

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>val</td>
        <td><code>String</code></td>
        <td>Значение, возвращаемое пунктом меню, если он выбран.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.


## Модификаторы блока

### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора `theme` отображается [нативный](#native) вид контрола.
Наглядно видно на примерах ниже:

<a name="native"></a>
**default**

```bemjson
{
    block : 'menu-item',
    content : 'default',
    val : 'my value'
}
```

**simple**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'simple' },
    content : 'simple',
    val : 'my value'
}
```

**normal**

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'normal', size : 'm' },
    content : 'normal',
    val : 'my value'
}
```

### Типы `_type`

Модификатор `type` в значении `link` позволяет создавать пункт меню, реализованный блоком [`link`](../link/link.ru.md). Блок `link` при этом помещается в поле `content` BEMJSON-декларации блока. Все модификаторы блока `link` могут быть переданы пункту меню `menu-item`.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'normal', size : 'm', type : 'link' },
    content : {
        block : 'link',
        url : '#',
        content : 'Link 1'
    }
}
```

### Состояния блока

#### Выбранный пункт меню `_checked`

Модификатор указывает, что пункт меню выбран.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'normal', size : 'm', checked : true },
    content : '_checked'
}
```

В блоке `menu` модификатор `checked` для каждого пункта устанавливается автоматически по щелчку мыши.

#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

Если модификатор `disabled` установлен и пункт меню реализован блоком `link`, переход по ссылке не осуществляется.

```bemjson
{
    block : 'menu-item',
    mods : { theme : 'normal', size : 'm', disabled : true },
    content : '_disabled'
}
```

#### Наведение курсором `_hovered`

Определяет действие «наведение курсором» на пункт меню.

Автоматически выставляется при наведении указателем мыши на пункт меню.