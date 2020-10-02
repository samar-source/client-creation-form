<template>
  <div id="app">`

<!-- GitHub icon -->
    <a href="#" id="github-icon" title="Repository on GitHub">
      <font-awesome-icon :icon="['fab', 'github']" style="color: white;" size="2x" />
    </a>

<!-- Message about a successfully created client -->
    <div v-if="regMessage" class="alert alert-success" role="alert">
       <div class="alert-text">Клиент успешно создан!</div>
    </div>
    <form class="form" @submit.prevent="createClient" novalidate>

<!-- STEP 1 -->
        <div class="form-step" v-show="step === 1">
          <div class="form-header">Основные данные</div>
          <div class="form-body">

      <!-- Surname -->
            <div class="form-group">
                <label class="form-label" for="surname">Фамилия*</label>
                <input @blur="$v.formReg.surname.$touch()" :class="status($v.formReg.surname)" v-model.trim="formReg.surname" type="text" class="form-control" id="surname">
                <div class="error" v-if="!$v.formReg.surname.required">{{ reqText }}</div>
                <div class="error" v-if="!$v.formReg.surname.minLength">Фамилия должна состоять минимум из {{$v.formReg.surname.$params.minLength.min}} букв.</div>
                <div class="error" v-if="!$v.formReg.surname.alphaPerson">{{ alphaPersonText }}</div>
            </div>

      <!-- Name -->
            <div class="form-group">
                <label class="form-label" for="name">Имя*</label>
                <input @blur="$v.formReg.name.$touch()" :class="status($v.formReg.name)" v-model.trim="formReg.name" type="text" class="form-control" id="name">
                <div class="error" v-if="!$v.formReg.name.required">{{ reqText }}</div>
                <div class="error" v-if="!$v.formReg.name.minLength">Имя должно состоять минимум из {{$v.formReg.name.$params.minLength.min}} букв.</div>
                <div class="error" v-if="!$v.formReg.name.alphaPerson">{{ alphaPersonText }}</div>
            </div>

      <!-- Patronymic -->
            <div class="form-group">
                <label class="form-label" for="patronymic">Отчество</label>
                <input v-model.trim="formReg.patronymic" type="text" class="form-control" id="patronymic">
                <div class="error" v-if="!$v.formReg.patronymic.minLength">Отчество должно состоять минимум из {{$v.formReg.patronymic.$params.minLength.min}} букв.</div>
                <div class="error" v-if="!$v.formReg.patronymic.alphaPerson">{{ alphaPersonText }}</div>
            </div>

      <!-- Birthdate -->
            <div class="form-group date-field">
                <label class="form-label" for="birthdate">Дата рождения*</label>
                <input @blur="$v.formReg.birthdate.$touch()" :class="status($v.formReg.birthdate)" v-model.trim="formReg.birthdate" type="date" class="form-control" id="birthdate">
                <span class="arrow"></span>
                <div class="error" v-if="!$v.formReg.birthdate.required">{{ reqText }}</div>
            </div>

      <!-- Phone Number -->
            <div class="form-group">
                <label class="form-label" for="phoneNumber">Номер телефона*</label>
                <div class="wrapperPhoneNumber">
                  <span id="countryCode">+7 </span>
                  <input @blur="$v.formReg.phoneNumber.$touch()" :class="status($v.formReg.phoneNumber)" v-model.trim="formReg.phoneNumber" type="text" class="form-control" id="phoneNumber" @input="acceptNumber" placeholder="(555) 555-5555">
                </div>
                <div class="error" v-if="!$v.formReg.phoneNumber.required || !$v.formReg.phoneNumber.minLength">{{ reqText }}</div>
            </div>

      <!-- Clients Group -->
            <div class="form-group multiple-field">
              <label class="form-label" for="clientsGroup">Группа клиентов*</label>
              <select v-model="formRegList.clientsGroup.selected" id="clientsGroup" class="form-control select" multiple>
                <option v-for="option in formRegList.clientsGroup.options" v-bind:key="option.id" class="option">
                  {{ option.value }}
                </option>
              </select>
              <span class="arrow"></span>
              <div class="mark">Для выбора нескольких полей нажмите ctrl при клике</div>
              <div class="error" v-if="!$v.formRegList.clientsGroup.selected.required">{{ reqText }}</div>
            </div>

      <!-- Selected Doctor -->
            <div class="form-group select-field">
              <label class="form-label" for="selectedDoctor">Лечащий врач</label>
              <select v-model="formRegList.selectedDoctor.selected" id="selectedDoctor" class="form-control select">
                <option v-for="option in formRegList.selectedDoctor.options" v-bind:key="option.key">
                  {{ option.value }}
                </option>
              </select>
              <span class="arrow"></span>
            </div>

      <!-- Checkbox -->
            <div class="form-group">
              <input v-model="formReg.checked" type="checkbox" id="checkbox">
              <span class="checkmark"></span>
              <label class="form-label" id="checkboxLabel" for="checkbox">Не отправлять СМС</label>
            </div>

            <button @click="step++" :disabled="disabledBtn1" type="button" class="button">Далее</button>
          </div>
        </div>

<!-- STEP 2 -->
        <div class="form-step" v-show="step === 2">
          <div class="form-header">Адрес</div>
          <div class="form-body">

      <!-- Index -->
            <div class="form-group">
                <label class="form-label" for="index">Индекс</label>
                <input @blur="$v.formReg.index.$touch()" :class="status($v.formReg.index)" v-model.trim="formReg.index" type="text" class="form-control" id="index">
                <div class="error" v-if="!$v.formReg.index.minLength || !$v.formReg.index.maxLength || !$v.formReg.index.numeric">Индекс должн состоять из {{$v.formReg.index.$params.minLength.min}} цифр</div>
            </div>

      <!-- Country -->
            <div class="form-group">
                <label class="form-label" for="country">Страна</label>
                <input @blur="$v.formReg.country.$touch()" :class="status($v.formReg.country)" v-model.trim="formReg.country" type="text" class="form-control" id="country">
                <div class="error" v-if="!$v.formReg.country.minLength">Название страны должно состоять минимум из {{$v.formReg.country.$params.minLength.min}} букв.</div>
                <div class="error" v-if="!$v.formReg.country.alpha">{{ alphaText }}</div>
            </div>

      <!-- Region -->
            <div class="form-group">
                <label class="form-label" for="region">Область</label>
                <input @blur="$v.formReg.region.$touch()" :class="status($v.formReg.region)" v-model.trim="formReg.region" type="text" class="form-control" id="region">
                <div class="error" v-if="!$v.formReg.region.minLength">Название области должно состоять минимум из {{$v.formReg.region.$params.minLength.min}} букв.</div>
                <div class="error" v-if="!$v.formReg.region.alpha">{{ alphaText }}</div>
            </div>

      <!-- City -->
            <div class="form-group">
                <label class="form-label" for="city">Город*</label>
                <input @blur="$v.formReg.city.$touch()" :class="status($v.formReg.city)" v-model.trim="formReg.city" type="text" class="form-control" id="city">
                <div class="error" v-if="!$v.formReg.city.required">{{ reqText }}</div>
                <div class="error" v-if="!$v.formReg.city.minLength">Название города должно состоять минимум из {{$v.formReg.city.$params.minLength.min}} букв.</div>
                <div class="error" v-if="!$v.formReg.city.alpha">{{ alphaText }}</div>
            </div>

      <!-- Street -->
            <div class="form-group">
                <label class="form-label" for="street">Улица</label>
                <input v-model.trim="formReg.street" type="text" class="form-control" id="street">
                <div class="error" v-if="!$v.formReg.street.minLength">Название улицы должно состоять минимум из {{$v.formReg.street.$params.minLength.min}} букв.</div>
            </div>

      <!-- House -->
            <div class="form-group">
                <label class="form-label" for="house">Дом</label>
                <input v-model.trim="formReg.house" type="text" class="form-control" id="house">
            </div>

            <button @click="step--" type="button" class="button button-left">Назад</button>
            <button @click="step++" :disabled="disabledBtn2" type="button" class="button button-right">Далее</button>
          </div>
        </div>

<!-- STEP 3 -->
        <div class="form-step" v-show="step === 3">
          <div class="form-header">Паспорт</div>
          <div class="form-body">

      <!-- Document Type -->
            <div class="form-group select-field">
              <label class="form-label" for="documentType">Тип документа*.</label>
              <select @blur="$v.formRegList.documentType.selected.$touch()" :class="status($v.formRegList.documentType.selected)" v-model.trim="formRegList.documentType.selected" class="form-control select" id="documentType">
                <option v-for="option in formRegList.documentType.options" v-bind:key="option.key">
                  {{ option.value }}
                </option>
              </select>
              <span class="arrow"></span>
              <div class="error" v-if="!$v.formRegList.documentType.selected.required">{{ reqText }}</div>
            </div>

      <!-- Series -->
            <div class="form-group">
                <label class="form-label" for="series">Серия</label>
                <input v-model.trim="formReg.series" type="text" class="form-control" id="series">
                <div class="error" v-if="!$v.formReg.series.minLength || !$v.formReg.series.maxLength || !$v.formReg.series.numeric">Серия должна состоять из {{$v.formReg.series.$params.minLength.min}} цифр</div>
            </div>

      <!-- Number -->
            <div class="form-group">
                <label class="form-label" for="number">Номер</label>
                <input v-model.trim="formReg.number" type="text" class="form-control" id="number">
                <div class="error" v-if="!$v.formReg.number.minLength || !$v.formReg.number.maxLength || !$v.formReg.number.numeric">Номер должн состоять из {{$v.formReg.number.$params.minLength.min}} цифр</div>
            </div>

      <!-- Who issued -->
            <div class="form-group">
                <label class="form-label" for="issued">Кем выдан</label>
                <input v-model.trim="formReg.issued" type="text" class="form-control" id="issued">
            </div>

      <!-- Date of issue -->
            <div class="form-group date-field">
                <label class="form-label" for="dateIssue">Дата выдачи*</label>
                <input @blur="$v.formReg.dateIssue.$touch()" :class="status($v.formReg.dateIssue)" v-model.trim="formReg.dateIssue" type="date" class="form-control" id="dateIssue">
                <span class="arrow"></span>
                <div class="error" v-if="!$v.formReg.dateIssue.required">{{ reqText }}</div>
            </div>

            <button @click="step--" type="button" class="button button-left">Назад</button>
            <button @click="step++" :disabled="disabledBtn3" type="submit" class="button">Создать клиента</button>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
// Vuelidate
import { required, minLength, maxLength, helpers, numeric } from 'vuelidate/lib/validators'

// Regular expressions for text fields
const alphaPerson = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ-]*$/)
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ -]*$/)

// Initialization
export default {
  name: 'App',
  data () {
    return {
      step: 1,
      regMessage: false,
      reqText: 'Поле обязательное для заполнения',
      alphaPersonText: 'Разрешены только буквы и дефисы',
      alphaText: 'Разрешены только буквы, дефисы и пробелы',
      formReg: {
        surname: '',
        name: '',
        patronymic: '',
        birthdate: '',
        phoneNumber: '',
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        series: '',
        number: '',
        issued: '',
        dateIssue: ''
      },
      formRegList: {
        clientsGroup: {
          selected: [],
          options: [
            { id: '1', value: 'VIP' },
            { id: '2', value: 'Проблемные' },
            { id: '3', value: 'ОМС' }
          ]
        },
        selectedDoctor: {
          selected: '',
          options: [
            { key: '1', value: 'Иванов' },
            { key: '2', value: 'Захаров' },
            { key: '3', value: 'Чернышева' }
          ]
        },
        documentType: {
          selected: '',
          options: [
            { key: '1', value: 'Паспорт' },
            { key: '2', value: 'Свидетельство о рождении' },
            { key: '3', value: 'Вод. удостоверение' }
          ]
        }
      }
    }
  },
  // Required fields
  computed: {
    disabledBtn1 () {
      return this.$v.formReg.surname.$invalid || this.$v.formReg.name.$invalid || this.$v.formReg.birthdate.$invalid || this.$v.formReg.phoneNumber.$invalid || this.$v.formRegList.clientsGroup.$invalid
    },
    disabledBtn2 () {
      return this.$v.formReg.city.$invalid
    },
    disabledBtn3 () {
      return this.$v.formRegList.documentType.selected.$invalid || this.$v.formReg.dateIssue.$invalid
    }
  },
  methods: {
    // Placeholder for phone number
    acceptNumber () {
      var x = this.formReg.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.formReg.phoneNumber = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    },
    // Form validation
    status (validation) {
      return {
        'is-invalid': validation.$error
      }
    },
    // Updating the form after creating the client
    createClient () {
      this.reset()
    },
    reset () {
      // Reset the step and show the registration message
      this.step = 1
      this.regMessage = true
      // Remove the registration message
      setTimeout(() => {
        this.regMessage = false
      }, 3000)
      // Reset all input
      for (const field in this.formReg) {
        this.formReg[field] = ''
      }
      // Reset all select
      for (const field in this.formRegList) {
        this.formRegList[field].selected = ''
      }
      // Reset select clients group
      this.formRegList.clientsGroup.selected = []
      // Reset validation
      this.$v.$reset()
    }
  },
  // Validation fields and conditions
  validations: {
    formReg: {
      surname: {
        required,
        alphaPerson,
        minLength: minLength(3)
      },
      name: {
        required,
        alphaPerson,
        minLength: minLength(3)
      },
      patronymic: {
        alphaPerson,
        minLength: minLength(3)
      },
      birthdate: {
        required
      },
      phoneNumber: {
        required,
        minLength: minLength(14)
      },
      index: {
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(6)
      },
      country: {
        alpha,
        minLength: minLength(3)
      },
      region: {
        alpha,
        minLength: minLength(3)
      },
      city: {
        required,
        alpha,
        minLength: minLength(3)
      },
      street: {
        minLength: minLength(3)
      },
      series: {
        numeric,
        minLength: minLength(4),
        maxLength: maxLength(4)
      },
      number: {
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(6)
      },
      dateIssue: {
        required
      }
    },
    formRegList: {
      clientsGroup: {
        selected: {
          required
        }
      },
      documentType: {
        selected: {
          required
        }
      }
    }
  }
}
</script>

<!-- Styles -->
<style lang="scss">
  @import "assets/styles/main";
</style>