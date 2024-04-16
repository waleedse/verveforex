<x-mail::message>
# Introduction

<p>Dear {{ $ib->client->first_name }},</p>
<p>We regret to inform you that your application as an introducing broker has been declined at this time.</p>
    <p>If you have any questions or would like further information, please feel free to contact us.</p>
    <p>Thank you for your interest.</p>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
