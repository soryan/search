function get_middle_index (phonebook) {
    return Math.floor(phonebook.length / 2)
}

function get_middle_record(phonebook) {
    middle_index = get_middle_index(phonebook)
    return phonebook[middle_index]
}

function get_first_half(phonebook) {
    middle_index = get_middle_index(phonebook)
    return phonebook.slice(0, middle_index)
}

function get_second_half(phonebook) {
    middle_index = get_middle_index(phonebook)
    return phonebook.slice(middle_index, phonebook.length)
}

function binary_search (phonebook, lookup_person) {
    middle_pair = get_middle_record(phonebook)
    middle_person = middle_pair[0]
    if (middle_person == lookup_person) {
        // ура, мы всё нашли
        middle_phone = middle_pair[1]
        return middle_phone;
        // возвращаем телефон
    }
    if (middle_person < lookup_person) {
        // искомая персона по алфавиту расположена после средней в рассматриваемой части телефонной книги
        // значит искать надо во второй половине рассматриваемой части телефонной книги
        half_of_the_task = get_second_half(phonebook)
        return binary_search(half_of_the_task, lookup_person)
    }
    if (middle_person > lookup_person) {
        // искомая персона по алфавиту расположена до средней в рассматриваемой части телефонной книги
        // значит искать надо во второй половине рассматриваемой части телефонной книги
        half_of_the_task = get_first_half(phonebook)
        return binary_search(half_of_the_task, lookup_person)
    }
}

phonebook = [
  ["Абалаев Иван", "111-11-11"],        // элемент списка №0 
  ["Баранов Сергей", "222-11-11"],      // элемент списка №1
  ["Волкова Ольга", "333-11-11"],       // элемент списка №2
  ["Громов Пётр", "444-11-11"],         // элемент списка №3
  ["Добрая Анна", "555-11-11"],         // элемент списка №4
  ["Ежова Елизавета", "666-11-11"]      // элемент списка №5
]

lookup_person="Добрая Анна"

binary_search(phonebook, lookup_person)
