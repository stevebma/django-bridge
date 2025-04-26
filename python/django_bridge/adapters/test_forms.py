from django.forms import Form, CharField
from .forms import FormAdapter
from django.test import TestCase


class TestForm(Form):
    test_field_a = CharField(initial='foo')
    test_field_b = CharField(initial='bar')
    test_field_c = CharField(initial='test')


class TestFormAdapter(TestCase):

    def test_form_without_prefix(self):
        test_form = TestForm()
        adapter = FormAdapter()
        fields, errors = adapter.js_args(test_form)
        self.assertEqual(len(fields), 3)
        self.assertEqual(fields[0].name, "test_field_a")
        self.assertEqual(fields[1].name, "test_field_b")
        self.assertEqual(fields[2].name, "test_field_c")
        self.assertEqual(errors, {})

    def test_form_with_prefix(self):
        test_form = TestForm(prefix="test_prefix")
        adapter = FormAdapter()
        fields, errors = adapter.js_args(test_form)
        self.assertEqual(len(fields), 3)
        self.assertEqual(fields[0].name, "test_prefix-test_field_a")
        self.assertEqual(fields[1].name, "test_prefix-test_field_b")
        self.assertEqual(fields[2].name, "test_prefix-test_field_c")
        self.assertEqual(errors, {})
