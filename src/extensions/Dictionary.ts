export default class Dictionary<V>
{
	[key:string]:any;

	private _items: {[key:string]:V} = {};

	private _count ?: number = 0;
	public get count()
	{
		return this._count;
	}

	public add(key: string, value: V):void
	{
		if(!this._items.hasOwnProperty(key))
			this._count += 1;
		this._items[key] = value;
	}

	public remove(key: string):void
	{
		if(this._items.hasOwnProperty(key))
		{
			this._count -= 1;
			delete this._items[key];
		}
	}

	public getValue(key:string):V
	{
		return this.containsKey(key)?this._items[key]:null;
	}

	public clear():void
	{
		this._count = 0;
		this._items = {};
	}

	public containsKey(key:string):boolean
	{
		return this._items.hasOwnProperty(key);
	}

	public get keys():string[]
	{
		return Object.keys(this._items);
	}
}
