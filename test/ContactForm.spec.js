import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

describe('ContactForm', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ContactForm)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})
