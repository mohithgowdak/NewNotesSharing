"""
WSGI config for NotesSharingProject project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

settings_module='NotesSharingProject.deployment' if 'WEBSITE_HOSTNAME' in os.environ else 'NotesSharingProject.settings'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()
app = application
