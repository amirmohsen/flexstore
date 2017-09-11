import get from 'lodash/get';
import set from 'lodash/set';
import unset from 'lodash/unset';
import has from 'lodash/has';

export default class Store {

	data = {};

	has({path}) {
		return has(this.data, path);
	}

	set({path, value}) {
		set(this.data, path, value);
	}

	get({path}) {
		return get(this.data, path);
	}

	remove({path}) {
		if(has(this.data, path)) {
			unset(this.data, path);
		}
	}
}