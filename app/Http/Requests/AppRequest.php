<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'game_name' => 'required',
            'game_code' => 'required',
            'service_id' => 'required',
            'service_key' => 'required',
            'currency_fullname' => 'required',
            'monthly_card_fullname' => 'required',
            'currency_shortname' => 'required',
            'monthly_card_shortname' => 'required',
            'google_conversion_id' => 'required',
            'google_conversion_label' => 'required',
            'app_store_link' => 'required',
            'google_store_link' => 'required'
        ];
    }
}
