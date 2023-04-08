from kivy.app import App
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.image import Image
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput

class MainApp(app):
    def build(self):
        print("I'm gonna kms")

if __name__=="__main__":
    app = MainApp()
    app.run()