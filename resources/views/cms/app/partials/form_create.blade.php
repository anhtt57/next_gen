<div class="row">
    <form role="form" id="app-create" method="POST" action="{{isset($appDetail) ? route('postEditApp', $appDetail->id) : route('postNewApp')}}">
        {{ csrf_field() }}
        <div class="col-md-6">
            @if(isset($appDetail))
                <input type="hidden" name="id" value="{{ $appDetail->id }}">
            @endif
            <div class="form-group">
                <label>Game Name(*)</label>
                <input type="text" name="game_name" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('game_name', isset($appDetail->game_name) ? $appDetail->game_name : '') }}" class="form-control" required>
            </div>
            <div class="form-group">
                <label>Google Analytic Id</label>
                <input type="text" name="ga_id" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('ga_id', isset($appDetail->ga_id) ? $appDetail->ga_id : '')  }}" >
            </div>
            <div class="form-group">
                <label>Google Conversion Label(*)</label>
                <input type="text" name="google_conversion_label" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('google_conversion_label', isset($appDetail->google_conversion_label) ? $appDetail->google_conversion_label : '' ) }}" required>
            </div>
            <div class="form-group">
                <label>Service Id(*)</label>
                <input type="text" name="service_id" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('service_id', isset($appDetail->service_id) ? $appDetail->service_id : '')  }}" required>
            </div>
            <div class="form-group">
                <label>IOS Version</label>
                <input type="text" name="ios_version" class="form-control" {{isset($viewDetail)? "disabled" : ""}} maxlength="10" value="{{ old('ios_version', isset($appDetail->ios_version) ? $appDetail->ios_version : '')  }}">
            </div>
            <div class="form-group">
                <label>Android Version</label>
                <input type="text" name="android_version" class="form-control" {{isset($viewDetail)? "disabled" : ""}} maxlength="10" value="{{ old('android_version', isset($appDetail->android_version) ? $appDetail->android_version : '')  }}">
            </div>
            <div class="form-group">
                <label>Currency FullName(*)</label>
                <input type="text" name="currency_fullname" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('currency_fullname', isset($appDetail->currency_fullname) ? $appDetail->currency_fullname : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Monthly Card FullName(*)</label>
                <input type="text" name="monthly_card_fullname" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('monthly_card_fullname', isset($appDetail->monthly_card_fullname) ? $appDetail->monthly_card_fullname : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Policy Name</label>
                <input type="text" name="policy_name" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('policy_name', isset($appDetail->policy_name) ? $appDetail->policy_name : '')  }}" >
            </div>
            <div class="form-group">
                <label>Policy Content</label>
                <textarea class="form-control" name="policy_content" rows="3" {{isset($viewDetail)? "readonly" : ""}}> {{isset($appDetail->policy_content) ? $appDetail->policy_content : '' }}</textarea>
            </div>
        </div>
        <!-- text input -->
        <div class="col-md-6">
            <div class="form-group">
                <label>Game Code(*)</label>
                <input type="text" name="game_code" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('game_code', isset($appDetail->game_code) ? $appDetail->game_code : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Google Conversion Id(*)</label>
                <input type="text" name="google_conversion_id" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('google_conversion_id', isset($appDetail->google_conversion_id) ? $appDetail->google_conversion_id : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Google Conversion Value</label>
                <input type="text" name="google_conversion_value" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('google_conversion_value', isset($appDetail->google_conversion_value) ? $appDetail->google_conversion_value : '')  }}">
            </div>
            <div class="form-group">
                <label>Service Key(*)</label>
                <input type="text" name="service_key" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('service_key', isset($appDetail->service_key) ? $appDetail->service_key : '')  }}" required>
            </div>
            <div class="form-group">
                <label>App Store Link(*)</label>
                <input type="text" name="app_store_link" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('app_store_link', isset($appDetail->app_store_link) ? $appDetail->app_store_link : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Play Store Link(*)</label>
                <input type="text" name="google_store_link" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('google_store_link', isset($appDetail->google_store_link) ? $appDetail->google_store_link : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Currency ShortName(*)</label>
                <input type="text" name="currency_shortname" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('currency_shortname', isset($appDetail->currency_shortname) ? $appDetail->currency_shortname : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Monthly Card ShortName(*)</label>
                <input type="text" name="monthly_card_shortname" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('monthly_card_shortname', isset($appDetail->monthly_card_shortname) ? $appDetail->monthly_card_shortname : '')  }}" required>
            </div>
            <div class="form-group">
                <label>Tutorial Name</label>
                <input type="text" name="tutorial_name" class="form-control" {{isset($viewDetail)? "disabled" : ""}} value="{{ old('tutorial_name'), isset($appDetail->tutorial_name) ? $appDetail->tutorial_name : ''  }}" >
            </div>
            <div class="form-group">
                <label>Tutorial Content</label>
                <textarea class="form-control" name="tutorial_content" rows="3" {{isset($viewDetail)? "readonly" : ""}}>{{isset($appDetail->tutorial_content) ? $appDetail->tutorial_content : '' }} </textarea>
            </div>
        </div>
        <div class="col-md-12">
            @if (!isset($viewDetail))
                <button type="submit" class="btn btn-info">Submit</button>
            @endif
        </div>
    </form>
</div>