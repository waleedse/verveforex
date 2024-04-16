<x-mail::message>
# Introduction

<p>Dear {{ $ib->client->first_name }},</p>
    <p>Your application as an introducing broker has been approved. You can now start referring clients to our platform.</p>
    <p>Thank you for partnering with us!</p>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
