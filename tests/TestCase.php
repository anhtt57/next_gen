<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected $token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9jbXNnYW1lLmRldi9hcGkvdjEvbG9naW4iLCJpYXQiOjE1MTE4MzU3NzgsImV4cCI6MTUxMjQ0MDU3OCwibmJmIjoxNTExODM1Nzc4LCJqdGkiOiJCcHgxdWpyQnNTMGhIamtmIn0.gyk8uw-8TXi2_83rrD9Kn927u0bG88brPBBffGhu4LE';

    use CreatesApplication;

    function getToken() {
        return $this->token;
    }
}
