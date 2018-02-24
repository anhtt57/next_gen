<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class VersionRequest extends FormRequest
{
	public $validator;
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
            'game_version' => 'required',
            'bundle_id' => 'required'
        ];
    }

    protected function failedValidation(Validator $validator){
	    $this->validator = $validator;
	}
}
