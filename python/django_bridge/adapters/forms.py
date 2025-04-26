from datetime import date, datetime, time

from django import forms

from django.core.files import File

from .registry import Adapter, register, registry


class FieldWithName:
    def __init__(self, name, field):
        self.name = name
        self.field = field


class FieldAdapter(Adapter):
    def pack(self, field, context):
        if registry.find_adapter(field.field.field.widget.__class__) is None:
            # Field widget is not adaptable, render the widget on the server
            return (
                "forms.ServerRenderedField",
                [
                    field.name,
                    field.field.label,
                    field.field.field.required,
                    field.field.field.disabled,
                    field.field.help_text,
                    field.field.field.widget.render(field.name, field.field.value()),
                ],
            )

        # Render widget on the client
        value = field.field.value()

        if isinstance(value, (datetime, date, time)):
            value = value.isoformat()

        # Pack any file simply as a string that contains its path
        if isinstance(value, File):
            value = str(value)

        return (
            "forms.Field",
            [
                field.name,
                field.field.label,
                field.field.field.required,
                field.field.field.disabled,
                field.field.field.widget,
                field.field.help_text,
                value,
            ],
        )


register(FieldAdapter(), FieldWithName)


class FormAdapter(Adapter):
    js_constructor = "forms.Form"

    def js_args(self, form):
        def field_with_name(field):
            return FieldWithName(field.html_name, field)
        return [
            [field_with_name(form[name]) for name in form.fields.keys()],
            form.errors,
        ]


register(FormAdapter(), forms.BaseForm)
